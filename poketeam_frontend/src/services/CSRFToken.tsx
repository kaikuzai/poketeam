import  { useEffect, useState } from 'react'
import apiClient from './api-client';
import { AxiosError } from 'axios';
import Cookies from 'js-cookie';

interface Response {
  response: object
}


const CSRFToken = () => {

  const [CSRFToken, setCSRFToken] = useState<string | null >(null)

  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<any>(null)
  const [error, setError] = useState<AxiosError | null>(null)


  const getCookie = (name: string) => {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
  };
  
  useEffect(() => {
    setLoading(true);
    const fetchCSRFToken = async () => {
        try {
          const response = await apiClient.get<Response>(`/accounts/csrf-cookie/`);
          setData(response.data);
          const csrfCookieFetch = getCookie('csrftoken')
          setCSRFToken(csrfCookieFetch)
          console.log("Library fetch js-cookie",Cookies.get('csrftoken'))
          setCSRFToken(getCookie('csrftoken'));
        } catch (error) {
          setError(error as AxiosError);
        } finally {
          setLoading(false);
        }
      };
      
      fetchCSRFToken();
    }, []);
        
    return (

      <input type='hidden' name='csrfmiddlewaretoken' value={CSRFToken ? CSRFToken : 'null'}/>

  )
}

export default CSRFToken