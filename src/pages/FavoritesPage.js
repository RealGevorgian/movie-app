import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import { motion } from "framer-motion";

function FavoritesPage() {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
        setFavorites(storedFavorites);
    }, []);

    const handleRemove = (id) => {
        const updated = favorites.filter((fav) => fav.id !== id);
        localStorage.setItem("favorites", JSON.stringify(updated));
        setFavorites(updated);
    };

    return (
        <div style={styles.container}>
            <NavigationBar />
            <h2 style={styles.title}>❤️ Your Favorites</h2>

            {favorites.length === 0 ? (
                <p style={styles.empty}>No favorite movies yet.</p>
            ) : (
                <div>
                    {favorites.map((movie) => (
                        <motion.div
                            key={movie.id}
                            style={styles.row}
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                        >
                            <Link
                                to={`/movies/${movie.id}`}
                                state={{ from: "favorites" }}
                                style={styles.movieInfo}
                            >
                                <img
                                    src={
                                        movie.poster_path
                                            ? `https://image.tmdb.org/t/p/w92${movie.poster_path}`
                                            : "https://via.placeholder.com/92x138?text=No+Image"
                                    }
                                    alt={movie.title}
                                    style={styles.image}
                                />
                                <div>
                                    <h3 style={{ marginBottom: 5 }}>{movie.title}</h3>
                                    <p>Year: {movie.year}</p>
                                </div>
                            </Link>
                            <button
                                onClick={() => handleRemove(movie.id)}
                                style={styles.removeButton}
                            >
                                ❌ Remove
                            </button>
                        </motion.div>
                    ))}
                </div>
            )}
        </div>
    );
}

const styles = {
    container: {
        padding: "2rem",
        color: "white",
        minHeight: "100vh",
    },
    title: {
        marginBottom: "2rem",
    },
    empty: {
        textAlign: "center",
        fontSize: "1.2rem",
    },
    row: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "rgba(255, 255, 255, 0.06)",
        padding: "1rem",
        borderRadius: "10px",
        marginBottom: "1rem",
    },
    movieInfo: {
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        textDecoration: "none",
        color: "white",
    },
    image: {
        width: "92px",
        borderRadius: "5px",
    },
    removeButton: {
        backgroundColor: "#e53935",
        border: "none",
        padding: "0.6rem 1.2rem",
        borderRadius: "6px",
        color: "white",
        cursor: "pointer",
    },
};

export default FavoritesPage;
