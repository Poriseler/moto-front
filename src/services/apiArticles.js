
import { mergeTags } from "../helpers/helperFunctions"


export async function getArticles(limit=10) {
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

export async function editArticle() {
    null;
}



export async function uploadThumbnail(data, slug, token) {
    
    const url = `http://127.0.0.1:8000/api/articles/articles/${slug}/upload-thumbnail/`
    const formData = new FormData()
    formData.append('thumbnail', data[0])
    const headers = {
        'Authorization': `Token ${token}`
    }
    const res = await fetch(url, {
        method: 'POST',
        headers: headers,
        body: formData
    })
    
    return res
}

export async function uploadPhotos(data, slug, token) {
    const url = `http://127.0.0.1:8000/api/articles/articles/${slug}/upload-photos/`
    const files = Array.from(data)
    console.log(files)
    const formData = new FormData()
    files.map(photo=>formData.append('photo', photo))
    const headers = {
        'Authorization': `Token ${token}`
    }
    const res = await fetch(url, {
        method: 'POST',
        headers: headers,
        body: formData
    })
    
    return res
}


export async function createArticle({newData}) {
    const urlArticle = `http://127.0.0.1:8000/api/articles/articles/`
    
    
    const { tytul, lead, glownyTekst, zrodloZdjec, kategoria, istniejaceTagi, miniaturka, zdjecia, token, noweTagi } = newData
    const tags = mergeTags(noweTagi, istniejaceTagi)
    const articlePayload = { 
        'header': tytul,
        'lead': lead,
        'main_text': glownyTekst,
        'category': kategoria,
        'photos_source': zrodloZdjec,
        'tags': tags

    }
    console.log(articlePayload)
    const headers = {
        'Authorization': `Token ${token}`,
        'Content-Type': 'application/json'
    }
    const res = await fetch(urlArticle, {
        method: 'post',
        body: JSON.stringify(articlePayload),
        headers: headers
    })
    const data = await res.json()
    const slug = await data.slug
    
    const thumbnailRes = await uploadThumbnail(miniaturka, slug, token)
    const thumbnailData = await thumbnailRes.json()
    console.log(thumbnailData)
    const photosRes = await uploadPhotos(zdjecia, slug, token)
    const photoData = await photosRes.json()
    console.log(photoData)

    return photoData
    
}

export async function getTags() {
    const url = 'http://127.0.0.1:8000/api/articles/tags/'
    const res = await fetch(url)
    const data = await res.json()
    
    let allTags = []
    await data.map(tagObj => allTags.push(tagObj.name))
    
    return allTags
    // return data

}

export async function getArticlesByCategory(category, limit=10) {
    
    const url = `http://127.0.0.1:8000/api/articles/articles?category=${category}&limit=${limit}`
    const res = await fetch(url)
    const data = await res.json()
    
    return data
}