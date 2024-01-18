import { getArticlesByCategory } from '../services/apiArticles';
import ArticleTile from './ArticleTile';
import { useEffect, useState } from 'react';

function ArticlesSection({ type }) {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    getArticlesByCategory(type, 4).then((data) => setArticles(data));
  }, [type]);

  return (
    <div className="w-[100%] md:w-[60%]  px-5">
      <div className=" flex flex-row flex-wrap gap-4 justify-between ">
        {articles?.map((article) => (
          <ArticleTile img={article.thumbnail} header={article.header} key={`${type}-${article.id}`} type="mainNew" slug={article.slug}/>
        ))}
      </div>
    </div>
  );
}

export default ArticlesSection;
