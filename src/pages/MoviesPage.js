import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import "../utils/App.css";
import { motion } from "framer-motion";

const API_KEY = "56624e735c4d065e5f06729a21b19253"; // Replace with your actual TMDb API key

function MoviesPage() {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredMovies, setFilteredMovies] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
            .then((res) => res.json())
            .then((data) => {
                setMovies(data.results);
                setFilteredMovies(data.results);
            });
    }, []);

    useEffect(() => {
        const filtered = movies.filter((movie) =>
            movie.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredMovies(filtered);
    }, [searchTerm, movies]);

    return (
        <div className="page-container">
            <NavigationBar />
            <div className="content-wrapper">
                <h2 className="section-title">🔥 Popular Movies</h2>
                <input
                    className="search-input"
                    type="text"
                    placeholder="Search by title..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div className="movie-grid">
                    {filteredMovies.map((movie) => (
                        <motion.div
                            key={movie.id}
                            className="movie-card"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            onClick={() => navigate(`/movies/${movie.id}`, { state: { from: "movies" } })}
                        >
                            <img
                                className="movie-poster"
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                alt={movie.title}
                            />
                            <h3 className="movie-title">{movie.title}</h3>
                            <p className="movie-year">Year: {movie.release_date?.slice(0, 4)}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MoviesPage;
