import { useArticlesByCategory } from '../../features/searching/useArticlesByCategory';
import ArticleListTiles from './ArticleListTiles';

function ArticleCategoryListLayout({ category }) {
  const { articles, isLoading: isLoadingArticles } = useArticlesByCategory(category);

  return <>{!isLoadingArticles && <ArticleListTiles articles={articles} />}</>;
}

export default ArticleCategoryListLayout;
