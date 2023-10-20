import { useMutation } from "@tanstack/react-query";

export function useCreateArticle() {
    const { mutate: createArticle, isLoading: isCreating } = useMutation({
        mutationFn: () =>createArticle,
        onSuccess: () => {
            console.log('Article created')
        },
        onError: (err) => console.log(err)
    })

    return {isCreating, createArticle}
}