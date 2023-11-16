import { useQuery } from "@tanstack/react-query"
import { getArticles } from "../services/apiArticles"

export function useFreshArticles() {
    const {
        isLoading,
        data: freshArticles,
        error
    } = useQuery({
        queryKey: ['newArticles'],
        queryFn: async () => {
           const data = await getArticles(5)
           return data
}})
    
    return {isLoading, freshArticles, error}
}