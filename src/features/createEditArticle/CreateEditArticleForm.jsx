import { useForm } from 'react-hook-form';
import FormRow from '../../ui/FormRow';
import { useEditArticle } from './useEditArticle';
import { useCreateArticle } from './useCreateArticle';
import { useEffect, useState } from 'react';
import { HiXMark } from 'react-icons/hi2';
import { getTags } from '../../services/apiArticles';

function CreateEditArticleForm({ articleToEdit = {}, setShowEditForm }) {
  const [exisitingTags, setExisitngTags] = useState([]);
  useEffect(() => {
    getTags().then((tags) => setExisitngTags(tags));
  }, []);
  const token = sessionStorage.getItem('token');

  const { slug: editSlug, ...editValues } = articleToEdit;
  const editValuesWithTags = {...editValues, tags: editValues.tags.map(tag => tag.name)};

  console.log(editValuesWithTags)
  const isEdit = Boolean(editSlug);
  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: isEdit ? editValuesWithTags : '',
  });
  const { errors } = formState;
  const { isEditing, editArticle } = useEditArticle();
  const { isCreating, createArticle } = useCreateArticle();

  const isWorking = isEditing || isCreating;

  function onSubmit(data) {
    if (isEdit)
      editArticle(
        { editData: { ...data, token: token }, slug: editSlug },
        {
          onSuccess: () => {
            setShowEditForm(false);
            
          },
        }
      );
    else
      createArticle(
        { newData: { ...data, token: token } },
        {
          onSuccess: () => {
            reset()
          },
        }
      );
  }

  function onError(errors) {
    console.log(errors);
  }
  return (
    <div className={ (isEdit ? "opacity-90 " : "opacity-60 ") +  "my-10  w-[90%] md:w-[60%] flex flex-col items-center bg-slate-100 rounded-xl p-10"}>
      <div onClick={()=>setShowEditForm(false)} className='self-end'> <HiXMark  className='h-8 w-8'/></div>
      <form
        onSubmit={handleSubmit(onSubmit, onError)}
        action=""
        className="flex flex-col gap-3 flex-grow max-w-[100%]"
        encType="multipart/form-data"
      >
        <FormRow label="Tytuł" error={errors?.name?.message}>
          <input
            type="text"
            id="header"
            {...register('header', {
              required: 'This field is required',
            })}
            className="border-slate-700 border rounded-lg ps-3 py-1"
          />
        </FormRow>
        <FormRow label="Lead" error={errors?.name?.message}>
          <input
            type="text"
            id="lead"
            {...register('lead', {
              required: 'This field is required',
            })}
            className="border-slate-700 border rounded-lg ps-3 py-1"
          />
        </FormRow>
        <FormRow label="Główny tekst" error={errors?.name?.message}>
          <textarea
            type="text"
            id="main_text"
            rows="15"
            cols="40"
            {...register('main_text', {
              required: 'This field is required',
            })}
            className="border-slate-700 border rounded-lg ps-3 py-1"
          />
        </FormRow>
        <FormRow label="Źródło zdjęć" error={errors?.name?.message}>
          <input
            type="text"
            id="photos_source"
            defaultValue="materiały producenta"
            {...register('photos_source', {
              required: 'This field is required',
            })}
            className="border-slate-700 border rounded-lg ps-3 py-1"
          />
        </FormRow>
        <FormRow label="Kategoria" error={errors?.name?.message}>
          <select
            id="category"
            {...register('category')}
            className="border-slate-700 border rounded-lg text-center py-1"
          >
            <option value="newsy">Newsy</option>
            <option value="felietony">Felietony</option>
            <option value="relacje">Relacje</option>
            <option value="testy">Testy</option>
          </select>
        </FormRow>

        <FormRow label="Istniejące tagi" error={errors?.name?.message}>
          <div className="flex flex-col max-h-[6rem] overflow-auto">
            {exisitingTags &&
              exisitingTags.map((label) => (
                <div key={label} className="flex flex-row ">
                  <label htmlFor={label} className="grow pe-3">
                    {label}
                  </label>
                  <input
                    className="mx-2 self-end"
                    type="checkbox"
                    {...register('tags')}
                    id={label}
                    value={label}
                  />
                </div>
              ))}
          </div>
        </FormRow>

        <FormRow label="Nowe tagi" error={errors?.name?.message}>
          <input
            type="text"
            id="noweTagi"
            {...register('noweTagi')}
            className="border-slate-700 border rounded-lg ps-3 py-1"
          />
        </FormRow>
        {!isEdit && <FormRow label="Miniaturka" error={errors?.name?.message}>
          <input
            type="file"
            id="thumbnail"
            accept="image/*"
            {...register('thumbnail', {
              required: 'This field is required',
            })}
            className="border-slate-700 border rounded-lg"
          />
        </FormRow>}
        {!isEdit && <FormRow label="Zdjęcia" error={errors?.name?.message}>
          <input
            type="file"
            multiple="multiple"
            accept="image/*"
            id="photos"
            {...register('photos', {
              required: 'This field is required',
            })}
            className="border-slate-700 border rounded-lg"
          />
        </FormRow>}
        <button
          disabled={isWorking}
          type="submit"
          className="hover:border-slate-600 transition-all duration-300 border px-4 py-2 max-w-[10rem] border-slate-300 rounded-lg self-center"
        >
          {isEdit ? "Zapisz zmiany" : "Dodaj artykuł"}
        </button>
      </form>
    </div>
  );
}

export default CreateEditArticleForm;
