function RelatedArticleHeader({ header, slug }) {
  return (
    <a href={`/artykuly/${slug}`} className="text-lg font-bold border-l-4 border-orange-400 ps-4 my-2 font-mainText">
      {header}
    </a>
  );
}

export default RelatedArticleHeader;
