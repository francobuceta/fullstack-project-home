import { useState, useEffect } from "react";

export const useFetchAllPokemon = (
  initialUrl: string,
  reqOpt?: RequestInit,
) => {
  const [url, setUrl] = useState(initialUrl);
  const [data, setData] = useState<PokemonList>();
  const [error, setError] = useState<undefined | Error>();
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const res = await fetch(url, reqOpt && reqOpt);
      const data = await res.json();

      if (res.status === 200) {
        setIsSuccess(true);
        setData(data);
        setError(undefined);
      } else {
        setIsSuccess(false);
        setError(data);
        setData(undefined);
      }
    } catch (e) {
      setIsSuccess(false);
      setData(undefined);
      if (e instanceof Error) {
        setError(e);
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  const refetch = (newUrl?: string) => {
    if (newUrl) setUrl(newUrl);
    else fetchData();
  };

  return { data, error, isLoading, isError: !isSuccess, isSuccess, refetch };
};
