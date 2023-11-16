function Tag({ name, slug }) {
  return (
    <a href={`http:\\\\127.0.0.1:5173\\artykuly\\tagi\\${slug}`}>
      <p className="px-2 py-1 m-2 text-sm bg-slate-100 whitespace-nowrap rounded-md hover:bg-slate-200">{name}</p>
    </a>
  );
}

export default Tag;
