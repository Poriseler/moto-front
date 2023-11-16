import { useMutation } from "@tanstack/react-query";
import { createArticle as createArticleApi } from "../../services/apiArticles";

export function useCreateArticle() {
    const { mutate: createArticle, isLoading: isCreating } = useMutation({
        mutationFn: createArticleApi,
        onSuccess: () => {
            console.log('Article created')
            
        },
        onError: (err) => console.log(err)
    })

    return {isCreating, createArticle}
}