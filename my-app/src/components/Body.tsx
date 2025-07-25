import { useState, useEffect } from 'react';
import { getPopularMovies, searchMovies } from './services/api';
import { useNavigate } from 'react-router-dom';

type CardProps = {
  imgSrc: string;
  title: string;
  onClick?: () => void; // Make onClick optional
};

function Card({ imgSrc, title, onClick }: CardProps) {
  return (
    <div className="card" onClick={onClick}>
      <img src={imgSrc} alt={title}/>
      <h3>{title}</h3>
    </div>
  );
}

function Body() {
  const [count, setCount] = useState(0); // Start with showing some cards
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    loadPopularMovies();
  }, []);
  console.log(movies);

  if(loading) {
    return (<h1>Loading...</h1>);
  }
  
  return (
    <main>
      <div className="controls-panel">
        <button onClick={() => setCount(16)}>Generate 16 Cards</button>
        <button onClick={() => setCount(6)}>Generate 6 Cards</button>
      </div>

      <div className="cards">
        {movies.slice(0, count).map((movie, index) => (
          <Card 
            key={index} 
            title={movie.title} 
            imgSrc={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            onClick={() => navigate(`/about/${movie.id}`)} // Navigate to movie details
          />
        ))}
      </div>
    </main>
  );
}

export default Body;