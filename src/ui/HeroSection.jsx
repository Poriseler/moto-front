import { useFreshArticles } from '../hooks/useFreshArticles';
import ArticleTile from './ArticleTile';

function HeroSection() {
  const { freshArticles } = useFreshArticles();

  return (
    <div className="w-[100%] md:w-[60%]  px-5 ">
      <div>
        {freshArticles && (
          <ArticleTile
            img={freshArticles[0].thumbnail}
            header={freshArticles[0].header}
            type="hero"
            key={`hero-${freshArticles[0].id}`}
            slug={freshArticles[0].slug}
          />
        )}
      </div>

      <div className=" flex flex-row flex-wrap gap-4 justify-between ">
        {freshArticles &&
          freshArticles.map((article, index) => {
            if (index >= 1)
              return (
                <ArticleTile
                  img={article.thumbnail}
                  header={article.header}
                  slug={article.slug}
                  key={`hero-${article.id}`}
                  type="mainNew"
                />
              );
          })}
      </div>
    </div>
  );
}

export default HeroSection;
