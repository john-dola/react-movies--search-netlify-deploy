import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <section key={movie.imdbID}>
      <div className="card">
        <div className="center-items">
          <h5 className="date">{movie.Year}</h5>
          <img
            src={
              movie.Poster !== "N/A"
                ? movie.Poster
                : "https://via.placeholder.com/400"
            }
            alt="image-card"
            className="img"
          />
          <div className="movie-info">
            <h3 className="movie">Movie:</h3>
            <h3 className="title">{movie.Title}</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieCard;
