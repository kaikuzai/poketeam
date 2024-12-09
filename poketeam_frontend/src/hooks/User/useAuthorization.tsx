import apiClient from '../../services/api-client'

interface Response {
    response: string
}

const useAuthorizationCheck = () => {

    const fetchAuthorization = async () => {
        try{
            const response = await apiClient.get<Response>('accounts/authenticated/')
            return response.data 

        } catch (error) {
            console.log(error)
        };
    };
    return {fetchAuthorization}
}

export default useAuthorizationCheck