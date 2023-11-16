import ArticleTile from '../../ui/ArticleTile';

function ArticleQueryListLayout({ articles }) {
  console.log(articles);

  return (
    <>
      {articles.map((article) => (
        <ArticleTile img={article.photo} header={article.header} key={article.id} type="list" slug={article.slug} />
      ))}
    </>
  );
}

export default ArticleQueryListLayout;
