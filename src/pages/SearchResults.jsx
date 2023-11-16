import { useSearchParams } from 'react-router-dom';
import { useArticlesByQuery } from '../features/searching/useArticlesByQuery';
import ArticleQueryListLayout from '../features/articleList/ArticleQueryListLayout';

function SearchResults() {
  const [searchParams] = useSearchParams();

  const query = searchParams.get('fraza');
  const { articles, isLoading: isLoadingArticles } = useArticlesByQuery(query);

  return (
    <>
      <div className="w-[95%] md:w-[60%] ">
        <div className="my-7 md:mx-10 text-xl md:text-3xl text-center">
          Wyniki wyszukiwania dla frazy:
          <span className="block font-medium">{query}</span>
        </div>
        {!isLoadingArticles && <ArticleQueryListLayout articles={articles} />}
      </div>
    </>
  );
}

export default SearchResults;
