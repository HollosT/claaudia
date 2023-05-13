import { useEffect, useState } from "react";

type FetchFunction<T> = () => Promise<T>;

const useFetchData = <T>(func: FetchFunction<T>) => {
  const [data, setValue] = useState<T>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error>();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const result = await func();
        setValue(result);
      } catch (err) {
        setError(err as Error);
      }
      setLoading(false);
    };

    fetchData();
  }, [func]);

  return {data, loading, error};
};

export default useFetchData;