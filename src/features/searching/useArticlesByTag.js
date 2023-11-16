import { useQuery } from "@tanstack/react-query"
import { getArticlesByTag } from "../../services/apiArticles"

export function useArticlesByTag(tag, limit=undefined) {
    const {
        isLoading,
        data: articles,
        error
    } = useQuery({
        queryKey: ['articleDetailsRelatedArticles'],
        queryFn: async () => {
           const data = await getArticlesByTag(tag, limit)
           return data
}})
    
    return {isLoading, articles, error}
}