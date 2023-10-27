export function capitalize(phrase) {
    return phrase[0].toUpperCase() + phrase.slice(1)
}

export function mergeTags(newTags, oldTags) {
    let mergedTags = []; 
    
    if (newTags) {
        const separatedNewTags = newTags.split(",")
        separatedNewTags.map(tag=>mergedTags.push({'name': tag}))
    }
    if (oldTags) oldTags.map(tag => mergedTags.push({'name': tag}))
    
    
    return mergedTags
}