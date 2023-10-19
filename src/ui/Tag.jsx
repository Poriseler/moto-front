function Tag({name, slug}) {
    return (
        <a href={`http:\\\\127.0.0.1:5173\\artykuly\\kategorie\\${slug}`}>
            <p className="px-2 py-1 m-2 text-sm bg-slate-100 whitespace-nowrap">{name}{slug}</p>

        </a>
    )
}

export default Tag
