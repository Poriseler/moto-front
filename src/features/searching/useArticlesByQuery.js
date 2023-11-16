import { useQuery } from "@tanstack/react-query";
import { getArticlesByQuery as getArticlesByQueryApi } from "../../services/apiArticles";
 
export function useArticlesByQuery(query, limit=undefined){
    
    const {
        isLoading,
        data: articles,
        error
    } = useQuery({
        queryKey: ['articlesbyQuery'],
        queryFn: async () => {  
           const data = await getArticlesByQueryApi(query, limit)
           
           return data
}})

    return { articles, isLoading, error }
}