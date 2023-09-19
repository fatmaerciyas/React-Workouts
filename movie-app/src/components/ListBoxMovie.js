import ListBoxEachMovie from "./ListBoxEachMovie";

export default function ListBoxMovie({ movies, onSelectMovie }) {
  return (
    <ul className="list list-movies">
      {movies?.map((movie) => (
        <ListBoxEachMovie
          onSelectMovie={onSelectMovie}
          movie={movie}
          key={movie.imdbId}
        />
      ))}
    </ul>
  );
}
