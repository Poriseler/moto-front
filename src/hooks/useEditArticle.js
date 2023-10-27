import { useMutation } from "@tanstack/react-query";
import { editArticle as editArticleApi } from "../services/apiArticles";

export function useEditArticle() {
    const { mutate: editArticle, isLoading: isEditing } = useMutation({
        mutationFn: ({ newData, slug }) => editArticleApi(newData, slug),
        onSuccess: () => console.log('Article eddited'),
        onError: (err)=> console.log(err)
    })

    return { editArticle, isEditing}
}