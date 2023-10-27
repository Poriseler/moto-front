import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getTags } from "../services/apiArticles";

export function useTags() {
    const queryClient = useQueryClient()
    const {mutate: loadTags, isLoading: isLoadingTags} = useMutation({
        mutationFn: () => getTags(),
        onSuccess: (tags) => queryClient.setQueryData(['tags'], tags),
        onError: (e) => console.log(e)
    })

    return { loadTags, isLoadingTags }
}