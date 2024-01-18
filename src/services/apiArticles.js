

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

// export async function getArticleImages({slug}) {
//     const url = `http://127.0.0.1:8000/api/articles/images/${slug}`
//     const res = await fetch(url)
//     const data = await res.json()
//     return data
// }

export async function getArticlesByTag(tag, limit=10) {
    const url = `http://127.0.0.1:8000/api/articles/articles?tag=${tag}&limit=${limit}`
    const res = await fetch(url)
    const data = await res.json()

    return data
}

export async function editArticle({editData, slug}, ) {
    
    const url = `https://127.0.0.1:8000/api/articles/articles/${slug}`
    const { header, lead, main_text, category, photos_source, noweTagi, tags: oldTags} = editData
    console.log(url)
    const tags = mergeTags(noweTagi, oldTags)
    
    const articlePayload = { 
        'header': header,
        'lead': lead,
        'main_text': main_text,
        'category': category,
        'photos_source': photos_source,
        'tags': tags

    }
    console.log(articlePayload)
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
    console.log(newData)
    
    const { header, lead, main_text, photos_source, category, istniejaceTagi, thumbnail, photos, token, noweTagi } = newData
    const tags = mergeTags(noweTagi, istniejaceTagi)
    const articlePayload = { 
        'header': header,
        'lead': lead,
        'main_text': main_text,
        'category': category,
        'photos_source': photos_source,
        'tags': tags

    }
    console.log()
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
    
    const thumbnailRes = await uploadThumbnail(thumbnail, slug, token)
    const thumbnailData = await thumbnailRes.json()
    console.log(thumbnailData)
    const photosRes = await uploadPhotos(photos, slug, token)
    const photoData = await photosRes.json()

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


export async function getArticlesByQuery(query, limit=10) {
    const url = `http://127.0.0.1:8000/api/articles/articles?query=${query}&limit=${limit}`
    const res = await fetch(url)
    const data = await res.json()
    
    return data
}


export async function getArticlePhotos(id) {
    const url = `http://127.0.0.1:8000/api/articles/images?article-id=${id}`
    const res = await fetch(url)
    const data = await res.json()
    
    return data
}