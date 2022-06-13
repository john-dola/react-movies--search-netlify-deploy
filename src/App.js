import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

function App() {
  const url = "http://www.omdbapi.com/?apikey=7abf1d81";

  const getApi = async (title) => {
    const response = await fetch(`${url}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    getApi("batman");
  }, []);

  return (
    <>
      <h1 className="heading">Action Movies</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input
          placeholder="batman"
          type="text"
          className="form-input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={() => getApi(search)} className="btn">
          search
        </button>
      </form>
      <div className="card-control">
        {movies?.length > 0 ? (
          movies.map((movie) => <MovieCard movie={movie} />)
        ) : (
          <div className="heading">No Movies search found</div>
        )}
      </div>
    </>
  );
}

export default App;
