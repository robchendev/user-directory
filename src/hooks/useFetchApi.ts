import { useState, useEffect } from "react";

export const useFetchApi = <T>(url: string) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<T | null>();
  const [error, setError] = useState(false);

  const delay = (milliseconds: number) => {
    return new Promise((resolve) => setTimeout(resolve, Math.max(milliseconds, 0)));
  };

  useEffect(() => {
    const getUsers = async () => {
      setIsLoading(true);
      setError(false);
      const startTime = Date.now();
      try {
        const response = await fetch(url);
        const json = await response.json();
        const elapsedTime = Date.now() - startTime;
        const remainingTime = 500 - elapsedTime;
        await delay(remainingTime);
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
