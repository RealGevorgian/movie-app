import React, { useEffect, useState } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import { motion } from "framer-motion";

const API_KEY = "56624e735c4d065e5f06729a21b19253";

function MovieDetailPage() {
    const { id } = useParams();
    const location = useLocation();
    const [movie, setMovie] = useState(null);
    const [isFavorite, setIsFavorite] = useState(false);

    const isFromMoviesPage =
        location?.state?.from === "movies" ||
        document.referrer.includes("/movies");

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
            .then((res) => res.json())
            .then((data) => setMovie(data))
            .catch((err) => console.error("Failed to fetch movie:", err));
    }, [id]);

    useEffect(() => {
        const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
        setIsFavorite(favorites.some((fav) => fav.id === parseInt(id)));
    }, [id]);

    const handleFavoriteToggle = () => {
        const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

        const movieData = {
            id: movie.id,
            title: movie.title,
            year: movie.release_date?.slice(0, 4) || "N/A",
            poster_path: movie.poster_path || null,
        };

        if (isFavorite) {
            const updated = favorites.filter((fav) => fav.id !== movie.id);
            localStorage.setItem("favorites", JSON.stringify(updated));
            setIsFavorite(false);
        } else {
            localStorage.setItem("favorites", JSON.stringify([...favorites, movieData]));
            setIsFavorite(true);
        }
    };

    if (!movie) return null;

    return (
        <div style={styles.container}>
            <NavigationBar />
            <motion.div
                style={styles.card}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <h2>{movie.title}</h2>
                <p><strong>Year:</strong> {movie.release_date?.slice(0, 4)}</p>
                <p><strong>Description:</strong> {movie.overview || "No description available."}</p>
                <p><strong>Genres:</strong> {movie.genres?.map(g => g.name).join(", ")}</p>
                <p><strong>Rating:</strong> {movie.vote_average || "N/A"}</p>

                <div style={styles.buttonGroup}>
                    <button onClick={handleFavoriteToggle} style={styles.favoriteButton}>
                        {isFavorite ? "★ Remove from Favorites" : "☆ Add to Favorites"}
                    </button>
                    <Link to={isFromMoviesPage ? "/movies" : "/home"}>
                        <button style={styles.backButton}>
                            ← Back to {isFromMoviesPage ? "Movies" : "Home"}
                        </button>
                    </Link>
                </div>
            </motion.div>
        </div>
    );
}

const styles = {
    container: {
        minHeight: "100vh",
        padding: "2rem",
        background: "transparent",
        color: "white",
    },
    card: {
        backgroundColor: "rgba(255, 255, 255, 0.06)",
        padding: "2rem",
        borderRadius: "12px",
        maxWidth: "600px",
        margin: "3rem auto",
        boxShadow: "0 0 10px rgba(0,0,0,0.3)",
    },
    buttonGroup: {
        display: "flex",
        gap: "1rem",
        marginTop: "1.5rem",
    },
    favoriteButton: {
        padding: "0.6rem 1.2rem",
        fontSize: "1rem",
        borderRadius: "6px",
        border: "none",
        cursor: "pointer",
        backgroundColor: "#4caf50",
        color: "white",
    },
    backButton: {
        padding: "0.6rem 1.2rem",
        fontSize: "1rem",
        borderRadius: "6px",
        border: "1px solid white",
        backgroundColor: "transparent",
        color: "white",
        cursor: "pointer",
    },
};

export default MovieDetailPage;
