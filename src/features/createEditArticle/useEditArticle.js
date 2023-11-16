import { useMutation } from "@tanstack/react-query";
import { editArticle as editArticleApi } from "../../services/apiArticles";

export function useEditArticle() {
    const { mutate: editArticle, isLoading: isEditing } = useMutation({
        mutationFn: editArticleApi,
        onSuccess: () => console.log('Article eddited'),
        onError: (err)=> console.log(err)
    })

    return { editArticle, isEditing}
}