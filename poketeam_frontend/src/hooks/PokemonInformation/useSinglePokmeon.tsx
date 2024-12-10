import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../../services/api-client";

interface Pokemon {
  pokemon_id: number;
  pokemon_name: string;
  pokemon_types: string[];
  pokemon_abilities: string[];
  pokemon_url: string;
}

const useSinglePokemon = (pokemon_id: number) => {
  const [data, setData] = useState<Pokemon>();
  const [loading, setLoading] = useState<Boolean>(false);
  const [error, setError] = useState<AxiosError | null>(null);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await apiClient.get<Pokemon>(`/pokemon/${pokemon_id}`);
        setData(response.data);
      } catch (error) {
        setError(error as AxiosError);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [pokemon_id]);

  return { data, loading, error };
};
export default useSinglePokemon;
