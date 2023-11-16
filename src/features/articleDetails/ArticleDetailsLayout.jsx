import { useArticlePhotos } from '../../hooks/useArticlePhotos';
import { useArticlesByTag } from '../searching/useArticlesByTag';
import { HiPencilSquare } from 'react-icons/hi2';
import RelatedArticlesLayout from './RelatedArticlesLayout';
import Tag from '../../ui/Tag';
import PhotoSwipe from 'photoswipe';
import Overlay from '../../ui/Overlay';
import { useState } from 'react';
import CreateEditArticleForm from '../createEditArticle/CreateEditArticleForm';
import { useParams } from 'react-router-dom';

function ArticleDetailsLayout({ articleData }) {
  const { photos, isLoading: isLoadingPhotos } = useArticlePhotos(articleData.id);
  console.log(isLoadingPhotos);
  const {slug} = useParams()
  const [showEditForm, setShowEditForm] = useState(false)
  
  const isLoggedIn = sessionStorage.getItem('token')
  const { articles: relatedArticles, isLoading: isLoadingRelatedArticles } = useArticlesByTag(
    articleData.tags[0].slug,
    5
  );
  const options = {
    dataSource: [],
    showHideAnimationType: 'none',
  };

  console.log(articleData)

  function handleClick() {
    options.dataSource.push({
        src: articleData.thumbnail,
        width: 1200,
        height: 800,
      })
    photos?.map((photo) =>
      options.dataSource.push({
        src: photo.photo,
        width: 1200,
        height: 800,
      })
    );

    options.index = 0;
    const pswp = new PhotoSwipe(options);
    pswp.init();
  }
  return (
    <article className="w-[90%] md:w-[55%] mt-12 flex flex-col items-center">
      {showEditForm && <Overlay><CreateEditArticleForm articleToEdit={{slug: slug, ...articleData }}/></Overlay>}
        {isLoggedIn && <button onClick={() => setShowEditForm(true)} ><HiPencilSquare className='h-8 w-8'/> </button>}
      
      <h1 className=" text-3xl md:text-5xl font-semibold text-left font-header w-full">{articleData.header}</h1>
      <div className="flex flex-row items-center justify-between w-[100%] mt-4">
        <h3 className="">10.10.2023 | Aleksander Kamiński</h3>
        <div className="flex flex-row gap-3">
          <a href="#">
            <img className="max-h-[40px]" src="\public\media\facebook-color.png" />
          </a>
          <a href="#">
            <img className="max-h-[40px]" src="\public\media\linkedin.png" />
          </a>
          <a href="#">
            <img className="max-h-[40px]" src="\public\media\twitter.png" />
          </a>
        </div>
      </div>
      <div className=" mt-4 flex flex-col">
        <div className="overflow-hidden">
          <img
            src={articleData.thumbnail}
            className="transition-all hover:scale-110 duration-700"
            onClick={handleClick}
          />
        </div>

        {photos?.length >1 ? <p className=" shadow-xl text-base md:text-md py-2 text-center font-semibold bg-gradient-to-r from-orange-300 via-orange-400 to-orange-300">
          Kliknij, żeby wyświetlić galerię
        </p> : null}
        <p className="self-end text-sm mt-1">Zdjęcia: materiały producenta</p>
      </div>
      <div className="grid grid-rows-[auto_auto_auto] md:grid-rows-[auto_auto] grid-cols-3 gap-6 mt-10">
        <div className="col-span-3 md:col-span-2">
          <p className="text-justify self-start font-mainText">{articleData.main_text}</p>
        </div>
        {!isLoadingRelatedArticles && (
          <RelatedArticlesLayout relatedArticles={relatedArticles} slug={articleData.slug} />
        )}
        <div className="col-span-3 md:col-span-2 row-start-2 row-end-3">
          <div className="flex flex-row items-center self-start">
            <p>Tagi: </p>
            {articleData.tags.map((tag) => (
              <Tag name={tag.name} slug={tag.slug} key={tag.name} />
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

export default ArticleDetailsLayout;
