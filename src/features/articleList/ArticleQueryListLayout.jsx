import ArticleTile from '../../ui/ArticleTile';

function ArticleQueryListLayout({ articles }) {

  return (
    <>
      {articles.map((article) => (
        <ArticleTile img={article.thumbnail} header={article.header} key={article.id} type="list" slug={article.slug} />
      ))}
    </>
  );
}

export default ArticleQueryListLayout;
