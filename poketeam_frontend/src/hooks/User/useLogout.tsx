import apiClient from "../../services/api-client";
import Cookies from "js-cookie";
import { fetchOrReplaceCSRF } from "../../services/Cookies/CSRFToken";

interface Response {
    response: string; 
}

const useLogoutUser = () => {

    const logout = async () => {

        await fetchOrReplaceCSRF();

        const config = {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "X-CSRFToken": Cookies.get("csrftoken"),
            },
        };

        try {
            await apiClient.post<Response>("accounts/logout/", null, config);
            await Cookies.remove('csrftoken')
        } catch (error: any) {
            console.error("Error logging out:", error);
        } finally {
            await Cookies.remove('csrftoken')
        }
    };

    return { logout };
};

export default useLogoutUser;
