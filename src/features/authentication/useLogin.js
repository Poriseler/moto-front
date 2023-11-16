import { useMutation } from '@tanstack/react-query'
import { login as loginApi } from '../../services/apiAuth'
import { useNavigate } from 'react-router-dom'

export function useLogin() {
     
    const navigate = useNavigate()
    
    const { mutate: login, isLoading } = useMutation({
        mutationFn: ({ email, password }) => loginApi({email, password}),
        onSuccess: (data) => {
            sessionStorage.setItem('token', data.token)
            navigate('/', { replace: true});
        },
        onError: err => console.log(('error', err))
    })

    return { login, isLoading };
}