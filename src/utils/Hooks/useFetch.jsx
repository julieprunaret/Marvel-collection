import { useEffect, useState } from 'react';
import md5 from 'js-md5';

const useFetch = url => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  // console.log(keys);
  // Get yours APIs key at https://developer.marvel.com
  const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY; // your public key
  const PRIVATE_KEY = process.env.REACT_APP_PRIVATE_KEY; // youur private key

  useEffect(() => {
    if (!url) return;
    async function fetchData() {
      const ts = Number(new Date());
      const hash = md5(ts + PRIVATE_KEY + PUBLIC_KEY);
      try {
        const response = await fetch(
          `${url}ts=${ts}&orderBy=name&limit=10&apikey=${PUBLIC_KEY}&hash=${hash}`
        );
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
