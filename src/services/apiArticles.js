export async function getArticles({limit=10}) {
    let url = `http://127.0.0.1:8000/api/articles/articles/?limit=${limit}`
    const res = await fetch(url)
    const data = await res.json()
    
    return data
}

export async function getArticleDetails(slug) {
    const url = `http://127.0.0.1:8000/api/articles/articles/${slug}/`
    const res = await fetch(url)
    const data = await res.json()
    
    return data
}

export async function getArticleImages({slug}) {
    const url = `http://127.0.0.1:8000/api/articles/images/${slug}`
    const res = await fetch(url)
    const data = await res.json()
    return data
}

export async function getArticlesByTag(tag, limit=10) {
   const url = `http://127.0.0.1:8000/api/articles/articles?tag=${tag}&limit=${limit}`
    const res = await fetch(url)
    const data = await res.json()
    
    return data
}