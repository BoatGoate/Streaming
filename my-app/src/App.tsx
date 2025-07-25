import Header from './components/Header'
import { Routes, Route } from 'react-router-dom';
import Body from './components/Body'
import Footer from './components/Footer'
import './App.css'
import MovieDetails from './components/MovieDetails';

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/about/:movieId" element={<MovieDetails />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App