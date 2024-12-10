import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../../services/api-client";

interface PokemonTypes {
  type_name: string;
  double_damage_from: string[];
  double_damage_to: string[];
  half_damage_from: string[];
  half_damage_to: string[];
  no_damage_from: string[];
  no_damage_to: string[];
  pokemon_in_type: string[];
}

const useTypes = () => {
  const [data, setData] = useState<PokemonTypes[]>([]);
  const [error, setError] = useState<AxiosError | null>(null);
  const [loadingState, SetLoadingState] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      SetLoadingState(true);
      try {
        const response = await apiClient.get<PokemonTypes[]>("pokemon-types/");
        setData(response.data);
      } catch (error) {
        setError(error as AxiosError);
      } finally {
        SetLoadingState(false);
      }
    };

    fetchData();
    console.log("types fetched");
  }, []);

  return { data, error, loadingState };
};

export default useTypes;
