import { useState } from "react";
import apiClient from "../../services/api-client";
import { AxiosError } from "axios";

interface Response {
  response: string;
}



const useLoginUser = () => {
  const [data, setData] = useState<Response | null>(null);
  const [error, setError] = useState<AxiosError | null>(null);
  const [isLoading, setLoading] = useState<boolean>(false);

  const login = async (username: string, password: string) => {
    // Not 100% Sure if this works correctly
    setLoading(true);
    setError(null);
    setData(null);

    try {
      const response = await apiClient.post<Response>("accounts/login/", {
        username,
        password,
      });

      setData(response.data);
    } catch (error: any) {
      setError(error.response?.data?.message || "Login failed.");
    } finally {
      setLoading(false);
    }
  };

  return { login, data, error, isLoading };
};

export default useLoginUser;
