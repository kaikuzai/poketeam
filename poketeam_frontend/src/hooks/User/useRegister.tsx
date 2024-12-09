import apiClient from "../../services/api-client";
import Cookies from "js-cookie";

interface Response {
  response: string;
}

const useRegisterUser = () => {


  const register = async (username: string, password: string, repassword: string) => {
    // Not 100% Sure if this works correctly


    const body = {
      username,
      password,
      repassword , 
    }

    const config = {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-CSRFToken': Cookies.get('csrftoken')
      }
    }

    try {
      const response = await apiClient.post<any>("accounts/register/", body, config);
      return response.data
    } catch (error: any) {
      console.log(error)
    } finally {
    }
  };

  return { register };
};

export default useRegisterUser;
