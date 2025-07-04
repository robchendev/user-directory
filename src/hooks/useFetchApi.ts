import { useState, useEffect } from "react";

export const useFetchApi = <T>(url: string) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<T | null>();
  const [error, setError] = useState(false);

  const delay = (milliseconds: number) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  useEffect(() => {
    const getUsers = async () => {
      setIsLoading(true);
      setError(false);
      try {
        const response = await fetch(url);
        const json = await response.json();
        await delay(300);
        setData(json);
      } catch (e) {
        setError(true);
        console.error(e);
      }
      setIsLoading(false);
    };
    getUsers();
  }, [url]);

  return { isLoading, data, error };
};
