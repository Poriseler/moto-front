import { useMutation } from "@tanstack/react-query";
import { getArticlesByCategory as getArticlesByCategoryApi } from "../services/apiArticles";
 
export function useArticlesByCategory(){
    const {mutate: getArticlesByCategory, isLoading, data } = useMutation({
        mutationFn: getArticlesByCategoryApi
    })

    return { getArticlesByCategory, isLoading, data }
}