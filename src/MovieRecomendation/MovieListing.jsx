import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MovieListing = ({ categories }) => {
  const [movies, setMovies] = useState({});
  const selectedCategory = categories.flat();
  
  useEffect(() => {
    async function fetchMovies() {
      const movieData = {};
      const genreNameToId = {
        'Fiction': 878,
        'Action': 28,
        'Drama': 18,
        'Romance': 10749,
        'Thriller': 53,
        'Western': 37,
        'Horror': 27,
        'Fantasy': 14,
        'Music': 10402,
      };
      for (let i = 0; i < selectedCategory.length; i++) {
        const category = selectedCategory[i];

        if (genreNameToId[category]) {
          const genreId = genreNameToId[category];
          const response = await axios.get(`https://api.themoviedb.org/3/discover/movie`, {
            params: {
              api_key: 'd2f0d6213854a6f59264b3a3013fc9b5',
              with_genres: genreId 
            },
          });
          movieData[category] = response.data.results.slice(0, 4);
        }
      }
      setMovies(movieData);
    }

    fetchMovies();

}, [selectedCategory]);

  return (
    <>
      {selectedCategory.map((category) => (
        <div key={category}>
          <h2 className='genre-name'>{category}</h2>
          <div className="movie-list">
            {movies[category] &&
              movies[category].map((movie) => (
                <div key={movie.id} className="movie-card">
                  <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} />
                </div>
              ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieListing;

