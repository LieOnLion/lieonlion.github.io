import { useState, useEffect } from 'react'

const useFetch = (url, method, headers) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortConst = new AbortController();

        fetch(url, { signal: abortConst.signal, method: method, headers: headers }).then(res => {
            if (!res.ok) {
                throw Error(`${res.status} ${res.statusText} - ${url}`);
            } return res.json();
        }).then(data => {
            setData(data);
            setIsPending(false);
            setError(null);
        }).catch(err => {
            if (err.name === 'AbortError') {
                console.log(err.name);
            } else {
                setError(err.message);
                setIsPending(false);
                console.log(err.message);
            }
        });

        return () => abortConst.abort();
    }, [url]);

    return { data, isPending, error };
};

export default useFetch;