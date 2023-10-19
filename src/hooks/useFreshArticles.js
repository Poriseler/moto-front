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
           const data = await getArticles(4)
           return data
}})
    console.log(freshArticles)
    return {isLoading, freshArticles, error}
}