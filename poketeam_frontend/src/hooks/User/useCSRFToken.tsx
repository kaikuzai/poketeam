import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../../services/api-client";

interface Response {
    response: string 
}

const useCSRFToken = () => {

  const [data, setData] = useState<Response>();
  const [loading, setLoading] = useState<Boolean>(false);
  const [error, setError] = useState<AxiosError | null>(null);


  const getCSRFTokenFromCookie = (): string | null => {
    const match = document.cookie.match(/(^|;)\\s*csrftoken=([^;]*)/);
    return match ? match[2] : null;
  };

  useEffect(() => {
    setLoading(true);
    const fetchCSRFToken = async () => {
      const csrfcookie = '';
      if(!csrfcookie){
        try {
          const response = await apiClient.get<Response>(`/accounts/csrf-cookie/`);
          setData(response.data);
      } catch (error) {
          setError(error as AxiosError);
      } finally {
          setLoading(false);
          console.log(getCSRFTokenFromCookie());
    }
      } else {
        return;
      }
    };
    fetchCSRFToken();
  }, []);

  return { data, loading, error };
};
export default useCSRFToken;
