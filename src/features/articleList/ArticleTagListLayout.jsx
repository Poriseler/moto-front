import { useArticlesByTag } from '../searching/useArticlesByTag';
import ArticleListTiles from './ArticleListTiles';

function ArticleTagListLayout({ tag }) {
  const { articles, isLoading: isLoadingArticles } = useArticlesByTag(tag);

  return <>{!isLoadingArticles && <ArticleListTiles articles={articles} />}</>;
}

export default ArticleTagListLayout;
