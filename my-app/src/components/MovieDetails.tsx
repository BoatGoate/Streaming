import { useState, useEffect } from 'react';
import { getMovieDetails, getPopularMovies, searchMovies } from './services/api';
import { useNavigate, useParams } from 'react-router-dom';

function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const loadMovieDetails = async () => {
      try {
        const response = await getMovieDetails(movieId!);
        setMovie(response);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadMovieDetails();
  }, [movieId]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (!movie) {
    return <h1>Movie not found</h1>;
  }

  return (
    <div className="movie-details">
      <h2>{movie.title}</h2>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      <p>{movie.overview}</p>
      <button onClick={() => navigate('/')}>Back to Home</button>
    </div>
  );
}

export default MovieDetails;