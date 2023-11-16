import { useQuery } from "@tanstack/react-query";
import { getArticlePhotos as getArticlePhotosApi } from "../services/apiArticles";
 
export function useArticlePhotos(id){
    
    const {
        isLoading,
        data: photos,
        error
    } = useQuery({
        queryKey: ['articlePhotos'],
        queryFn: async () => {  
           const data = await getArticlePhotosApi(id)
           return data
}})

    return { photos, isLoading, error }
}