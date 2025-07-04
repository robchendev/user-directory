import { useState, useEffect } from "react";

export const useFetchApi = <T>(url: string) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<T | null>();
  const [error, setError] = useState(false);

  const waitAtLeast = async (startTime: number, minimumDuration: number) => {
    const elapsedTime = Date.now() - startTime;
    const remainingTime = minimumDuration - elapsedTime;
    if (remainingTime) {
      await new Promise((resolve) => setTimeout(resolve, minimumDuration));
    }
  };

  useEffect(() => {
    const getUsers = async () => {
      setIsLoading(true);
      setError(false);
      const startTime = Date.now();
      try {
        const response = await fetch(url);
        const json = await response.json();
        await waitAtLeast(startTime, 500);
        setData(json);
      } catch (e) {
        await waitAtLeast(startTime, 500);
        setError(true);
        console.error(e);
      }
      setIsLoading(false);
    };
    getUsers();
  }, [url]);

  return { isLoading, data, error };
};
