import ArticleTile from "./ArticleTile"

function ArticleCategoryListLayout({articles}) {
    return (
        <div className="w-[95%] md:w-[60%]">
            {
                articles.map(article => <ArticleTile img={article.thumbnail} header={article.header} slug={article.slug} key={article['article-id']} type='list'/>)
            }
        </div>
    )
}

export default ArticleListLayout
