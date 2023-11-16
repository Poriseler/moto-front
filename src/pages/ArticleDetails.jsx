import { useParams } from 'react-router-dom';

import { useArticleDetails } from '../features/articleDetails/useArticleDetails';
import ArticleDetailsLayout from '../features/articleDetails/ArticleDetailsLayout';

function ArticleDetails() {
  const { slug } = useParams();
  const { articleData, isLoading } = useArticleDetails(slug);

  return <>{!isLoading && <ArticleDetailsLayout articleData={articleData} />}</>;
}

export default ArticleDetails;
