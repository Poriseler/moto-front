import { useForm } from "react-hook-form"
import CheckboxFieldset from "../ui/CheckboxFieldset"
import FormRow from "../ui/FormRow"
import { useEditArticle } from "../hooks/useEditArticle"
import { useCreateArticle } from "../hooks/useCreateArticle"

function CreateEditArticleForm({articleToEdit = {}}) {
    const exisitingTags = ['Premiera', 'F1', 'Motorsport']
    const { slug: editSlug, ...editValues } = articleToEdit
    const isEdit = Boolean(editSlug)
    const { register, handleSubmit, reset, formState } = useForm({
        defaultValues: isEdit ? editValues : '',
    })
    const { errors } = formState
    const { isEditing, editArticle } = useEditArticle()
    const { isCreating, createArticle } = useCreateArticle()

    const isWorking = isEditing || isCreating

    function onSubmit(data) {

        if (isEdit)
            editArticle(
                { newData: { ...data}, slug: editSlug},{
                    onSuccess: () => {
                    reset()
                }}
                )
        else
            createArticle(
                { newData: { ...data}},{
                    onSuccess: () => {
                        reset()
                    }
                }
        )
    }

    function onError(errors) {
        console.log(errors)
    }
    return (
        <div className="mt-10  w-[90%] md:w-[60%] flex flex-col items-center bg-slate-100 opacity-60 rounded-xl p-10">
            <form onSubmit={handleSubmit(onSubmit, onError)} action="" className="flex flex-col gap-3 flex-grow max-w-[100%]" encType="multipart/form-data">
                <FormRow label='Tytuł' error={errors?.name?.message}>
                    <input type="text" id="tytul" {...register('tytul', {
                        required: 'This field is required'
                    })} className="border-slate-700 border rounded-lg ps-3 py-1" />
                </FormRow>
                <FormRow label='Lead' error={errors?.name?.message}>
                    <input type="text" id="lead" {...register('lead', {
                        required: 'This field is required'
                    })} className="border-slate-700 border rounded-lg ps-3 py-1"/>
                </FormRow>
                <FormRow label='Główny tekst' error={errors?.name?.message}>
                    <textarea type="text" id="glowny-tekst" rows="15" cols="40" {...register('glowny-tekst', {
                        required: 'This field is required'
                    })} className="border-slate-700 border rounded-lg ps-3 py-1"/>
                </FormRow>
                <FormRow label='Źródło zdjęć' error={errors?.name?.message}>
                    <input type="text" id="zrodlo-zdjec" defaultValue="materiały producenta" {...register('zrodlo-zdjec', {
                        required: 'This field is required'
                    })} className="border-slate-700 border rounded-lg ps-3 py-1"/>
                </FormRow>
                <FormRow label='Kategoria' error={errors?.name?.message}>
                    <select  id="kategoria" className="border-slate-700 border rounded-lg text-center py-1">
                        <option value="newsy">Newsy</option>
                        <option value="felietony">Felietony</option>
                        <option value="relacje">Relacje</option>
                        <option value="testy">Testy</option>
                    </select>
                </FormRow>
                <FormRow label='Istniejące tagi' error={errors?.name?.message}>
                    <CheckboxFieldset name='istniejace-tagi' labels={exisitingTags} />
                    {/* <input type="text" id="istniejace-tagi" className="border-slate-700 border rounded-lg"/> */}
                </FormRow>
                <FormRow label='Nowe tagi' error={errors?.name?.message}>
                    <input type="text" id="nowe-tagi" className="border-slate-700 border rounded-lg ps-3 py-1"/>
                </FormRow>
                <FormRow label='Miniaturka'  error={errors?.name?.message}>
                    <input type="file" id="miniaturka" accept="image/*" {...register('miniaturka', {
                        required: 'This field is required'
                    })} className="border-slate-700 border rounded-lg"/>
                </FormRow>
                <FormRow label='Zdjęcia'  error={errors?.name?.message}>
                    <input type="file" multiple="multiple" accept="image/*" id="zdjecia" {...register('zdjecia', {
                        required: 'This field is required'
                    })} className="border-slate-700 border rounded-lg"/>
                </FormRow>
                <button disabled={isWorking} type='submit' className="hover:border-slate-600 transition-all duration-300 border px-4 py-2 max-w-[10rem] border-slate-300 rounded-lg self-center">Dodaj artykuł</button>
            </form>
        </div>
    )
}

export default CreateEditArticleForm
