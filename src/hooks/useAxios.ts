// useAxios.ts
import { useState, useEffect } from "react";
import axios, { AxiosRequestConfig, AxiosError } from "axios";
import { UseAxiosConfig, UseAxiosResponse } from "../types/types";

const useAxios = <T>(config: UseAxiosConfig): UseAxiosResponse<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true); // make a loading hook
  const [error, setError] = useState<string | null>(null); // make an error hook

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const axiosConfig: AxiosRequestConfig = {
          method: config.method || "GET",
          url: config.url,
          headers: config.headers || {},
          params: config.params || {},
          data: config.body || null,
        };

        const response = await axios(axiosConfig);
        setData(response.data);
      } catch (err) {
        const axiosError = err as AxiosError;
        setError(axiosError.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [config.url]); // Re-fetch when URL changes

  return { data, loading, error };
};

export default useAxios;
