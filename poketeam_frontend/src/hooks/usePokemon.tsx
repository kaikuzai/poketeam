import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosError } from "axios";

interface Pokemon {
  pokemon_name: string;
  pokemon_id: number;
  pokemon_types: string[];
  pokemon_url: string;
}

const usePokemon = () => {
  const [data, setData] = useState<Pokemon[]>([]);
  const [error, setError] = useState<AxiosError | null>(null);
  const [isLoading, setLoading] = useState<Boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiClient.get<Pokemon[]>("pokemon/");

        const sortedData = response.data.sort(
          (a, b) => a.pokemon_id - b.pokemon_id
        );
        setData(sortedData);
      } catch (error) {
        setError(error as AxiosError);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
    console.log("Pokemon fetched");
  }, []);

  return { data, error, isLoading };
};

export default usePokemon;
