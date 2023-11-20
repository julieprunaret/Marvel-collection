import { useEffect, useState } from 'react';

const useFetch = url => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const myKey = '9c2f06e1c097a694928e7997f69b1192';

  useEffect(() => {
    if (!url) return;
    async function fetchData() {
      try {
        const response = await fetch(url + myKey);
        const data = await response.json();
        setData(data);
      } catch (err) {
        console.log(err);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [url]);

  return { isLoading, data, error };
};

export default useFetch;
