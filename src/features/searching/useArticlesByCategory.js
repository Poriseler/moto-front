import { useQuery } from "@tanstack/react-query";
import { getArticlesByCategory as getArticlesByCategoryApi } from "../../services/apiArticles";
 
export function useArticlesByCategory(category, limit=undefined){
    // const {mutate: getArticlesByCategory, isLoading, data } = useMutation({
    //     mutationFn: getArticlesByCategoryApi
    // })
    
    const {
        isLoading,
        data: articles,
        error
    } = useQuery({
        queryKey: ['articlesbyCategory'],
        queryFn: async () => {  
           const data = await getArticlesByCategoryApi(category, limit)
           
           return data
}})

    return { articles, isLoading, error }
}