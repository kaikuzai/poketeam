import { useState } from "react";
import apiClient from "../../services/api-client";
import { AxiosError } from "axios";
import Cookies from "js-cookie";


interface Response {
  response: string;
}



const useLoginUser = () => {


  const login = async (username: string, password: string) => {
    // Not 100% Sure if this works correctly


    const body = {
      username,
      password,
    }

    const config = {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-CSRFToken': Cookies.get('csrftoken')
      }
    }

    try {
      const response = await apiClient.post<any>("accounts/login/", body, config);
      return response.data
    } catch (error: any) {
      console.log(error)
    } finally {
    }
  };

  return { login };
};

export default useLoginUser;
