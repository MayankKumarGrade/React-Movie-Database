import { useState, useEffect } from 'react';
import MovieCard from './components/MovieCard';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch('https://dummyapi.online/api/movies');
        const data = await response.json();
        setMovies(data);
      } catch (error) {
        console.error('Error fetching movies:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();

    const handleScroll = () => {
      const button = document.getElementById('scrollToTopBtn');
      if (window.scrollY > 300) {
        button.classList.add('show');
      } else {
        button.classList.remove('show');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (loading) {
    return <div className="loading"><h3>Loading...</h3></div>;
  }

  return (
    <div className="app">
      <h1>Movie Database</h1>
      <div className="movie-list">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <button id="scrollToTopBtn" className="scroll-to-top" onClick={scrollToTop}>
        ↑
      </button>
    </div>
  );
};

export default App;
