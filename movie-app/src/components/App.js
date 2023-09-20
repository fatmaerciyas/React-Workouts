import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Main from "./Main";
import Logo from "./Logo";
import Search from "./Search";
import NumResults from "./NumResults";
import Box from "./Box";
import ListBoxMovie from "./ListBoxMovie";
import Summary from "./Summary";
import Loader from "./Loader";
import Error from "./Error";
import MovieDetail from "./MovieDetail";
import WatchedMovie from "./WatchedMovie";
import { useMovies } from "./useMovies";
import { useLocalStorageState } from "./useLocalStorageState";

const KEY = "ecb401ff";

export default function App() {
  const [query, setQuery] = useState("inception");
  const [selectedId, setSelectedId] = useState(null);

  const [watched, setWatched] = useLocalStorageState([], "watched");
  // const [watched, setWatched] = useState(function () {
  //   const storedValue = localStorage.getItem("watched");
  //   return JSON.parse(storedValue);
  // });

  function handleSelectMovie(id) {
    setSelectedId((selectedId) => (id === selectedId ? null : id));
  }

  function handleCloseMovie() {
    setSelectedId(null);
  }

  function handleAddWatch(movie) {
    setWatched((watched) => [...watched, movie]);

    // localStorage.setItem("watched", JSON.stringify([...watched, movie]));
  }

  function handleDeleteMovie(id) {
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
  }

  const { movies, isLoading, error } = useMovies(query);

  return (
    <>
      <Navbar>
        <Logo />
        <Search query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </Navbar>

      <Main>
        <Box>
          {isLoading && <Loader />}
          {!isLoading && !error && (
            <ListBoxMovie movies={movies} onSelectMovie={handleSelectMovie} />
          )}
          {error && <Error message={error} />}
        </Box>

        <Box>
          {selectedId ? (
            <MovieDetail
              selectedId={selectedId}
              onCloseMovie={handleCloseMovie}
              apiKey={KEY}
              onAddWatched={handleAddWatch}
              watched={watched}
              onDeleteWatched={handleDeleteMovie}
            />
          ) : (
            <>
              <Summary watched={watched} />
              <WatchedMovie
                watched={watched}
                onDeleteWatched={handleDeleteMovie}
              />
            </>
          )}
        </Box>
      </Main>
    </>
  );
}
