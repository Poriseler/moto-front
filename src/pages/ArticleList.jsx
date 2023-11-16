import { useParams } from 'react-router-dom';
import SectionTitle from '../ui/SectionTitle';
import { capitalize } from '../helpers/helperFunctions';
import ArticleTagListLayout from '../features/articleList/ArticleTagListLayout';
import ArticleCategoryListLayout from '../features/articleList/ArticleCategoryListLayout';

function ArticleList() {
  const { tag } = useParams();
  const { kategoria } = useParams();

  return (
    <>
      {tag && <SectionTitle>{capitalize(tag)}</SectionTitle>}
      {kategoria && <SectionTitle>{capitalize(kategoria)}</SectionTitle>}
      {tag && <ArticleTagListLayout tag={tag} />}
      {kategoria && <ArticleCategoryListLayout category={kategoria} />}
    </>
  );
}

export default ArticleList;
