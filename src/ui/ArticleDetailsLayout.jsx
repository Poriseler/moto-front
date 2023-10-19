

import { useArticlesByTag } from "../hooks/useArticlesByTag"
import RelatedArticlesLayout from "./RelatedArticlesLayout"
import Tag from "./Tag"

function ArticleDetailsLayout({articleData}) {
    
    const {articles: relatedArticles, isLoading: isLoadingRelatedArticles} = useArticlesByTag(articleData.tags[0].slug,5)
    return (
        // <div>
            <div className="w-[90%] md:w-[55%] mt-12 flex flex-col items-center">
            <h1 className=" text-3xl md:text-5xl font-semibold text-left">{articleData.header}</h1>
            <div className="flex flex-row items-center justify-between w-[100%] mt-4">
                <h3 className="">10.10.2023 | Aleksander Kamiński</h3>
                <div className="flex flex-row gap-3">
                    <a href="#"><img className="max-h-[40px]" src="\public\media\facebook-color.png" /></a>
                    <a href="#"><img className="max-h-[40px]" src="\public\media\linkedin.png" /></a>
                    <a href="#"><img className="max-h-[40px]" src="\public\media\twitter.png" /></a>
                </div>
            </div>
            <div className=" mt-4 flex flex-col">
                <div className="overflow-hidden">
                    <img src={articleData.thumbnail} className="transition-all hover:scale-125 duration-700"/>
                </div>
                <p className="bg-orange-400  text-base md:text-lg py-2 text-center font-semibold "> Kliknij, żeby wyświetlić galerię (20 zdjęć)</p>
                <p className="self-end text-sm mt-1">Zdjęcia: materiały producenta</p>
            </div>
            <div className="grid grid-rows-[auto_auto_auto] md:grid-rows-[auto_auto] grid-cols-3 gap-6 mt-10">
                <div className="col-span-3 md:col-span-2">
                    <p className="text-justify self-start">
                        {articleData.main_text}
                    </p>
                </div>
                {!isLoadingRelatedArticles && (<RelatedArticlesLayout relatedArticles={relatedArticles} slug={articleData.slug}/>)}
                <div className="col-span-3 md:col-span-2 row-start-2 row-end-3">
                    <div className="flex flex-row items-center self-start">
                        <p>Tagi: </p>
                        {
                            articleData.tags.map(tag=><Tag name={tag.tag_name} slug={tag.slug} key={tag.name}/>)
                        }
                    </div>
                </div>
                
            </div>
        </div>
        // </div>
    )
}

export default ArticleDetailsLayout
