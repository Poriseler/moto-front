import RelatedArticleHeader from "./RelatedArticleHeader"

function RelatedArticlesLayout({relatedArticles, slug}) {
    
    return (
        <div className="row-span-1 md:row-span-2 col-span-3 md:col-span-1 flex flex-col items-start row-start-3 row-end-4">
            <div className=" w-[100%] flex flex-col">
                <h3 className="text-center text-2xl mb-2 font-semibold">Podobne</h3>
                {
                    relatedArticles?.filter(article=>article.slug != slug).map(article=> <RelatedArticleHeader header={article.header} key={article.header}/>)
                }
            </div>
        </div>
    )
}

export default RelatedArticlesLayout
