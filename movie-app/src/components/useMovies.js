import { useState, useEffect } from "react";

const KEY = "ecb401ff";

export function useMovies(query) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(
    function () {
      const controller = new AbortController(); //Browser API
      async function fetchMovies() {
        try {
          setIsLoading(true);

          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
            { signal: controller.signal }
          );

          const data = await res.json();

          if (!res.ok) {
            throw new Error("Something went wrong with fetching movies");
          }

          if (data.Response === "False") throw new Error("Movie not found");

          setMovies(data.Search);
        } catch (err) {
          if (err.name !== "AbortError") {
            console.log(err.message);
            setError(err.message);
          }
        } finally {
          setIsLoading(false);
        }
      }

      if (query.length < 3) {
        setMovies([]);
        setError("");
        return;
      }

      //handleCloseMovie();
      fetchMovies();

      //Clean up function
      return function () {
        controller.abort();
      };
    },
    [query]
  );

  return { movies, isLoading, error };
}
