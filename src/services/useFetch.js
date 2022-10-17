import { useState, useEffect } from "react";

const useFetch = (url) => {
	const [data, setData] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const abortController = new AbortController();

		setTimeout(() => {
			fetch(url, { signal: abortController.signal })
				.then((res) => {
					if (!res.ok) {
						throw Error("Oops");
					}
					return res.json();
				})
				.then((data) => {
					setData(data);
					setIsLoading(false);
					setError(null);
				})
				.catch((error) => {
					if (error.message !== "AbortError") {
						setData(null);
						setIsLoading(false);
						setError(error.message);
					}
				});
		}, 1000);

		return () => abortController.abort();
	}, []);

	return { data, isLoading, error };
};

export default useFetch;
