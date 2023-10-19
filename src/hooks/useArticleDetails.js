import { useQuery } from "@tanstack/react-query"
import { getArticleDetails } from "../services/apiArticles"

export function useArticleDetails(slug) {
    const {
        isLoading,
        data: articleData,
        error
    } = useQuery({
        queryKey: ['articleDetails'],
        queryFn: async () => {
           const data = await getArticleDetails(slug)
           return data
}})
    
    return {isLoading, articleData, error}
}