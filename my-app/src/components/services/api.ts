const API_KEY = "7c97e712427ee3a645496d30324f7c37";
const API_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
    const response = await fetch(`${API_URL}/movie/popular?api_key=${API_KEY}`);
    if (!response.ok) {
        throw new Error('Failed to fetch movies');
    }

    const data = await response.json();
    return data.results;
};

export const searchMovies = async (query : string) => {
    const response = await fetch(`${API_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    if (!response.ok) {
        throw new Error('Failed to fetch movies');
    }

    const data = await response.json();
    return data.results;
};

export const getMovieDetails = async (movieId: string) => {
    const response = await fetch(`${API_URL}/movie/${movieId}?api_key=${API_KEY}`);
    if (!response.ok) {
        throw new Error('Failed to fetch movie details');
    }

    const data = await response.json();
    return data;
};