import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";

const HomePage = () => {
    const featuredMovies = [
        { id: 872585, title: "Oppenheimer", year: 2023 }, // Actual TMDB ID
        { id: 693134, title: "Dune: Part Two", year: 2024 },
        { id: 872906, title: "Killers of the Flower Moon", year: 2023 }
    ];


    return (
        <div style={styles.container}>
            <NavigationBar />
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                style={styles.hero}
            >
                <h1 style={styles.welcome}>Welcome to Movie App</h1>
                <p style={styles.subtitle}>
                    Discover top-rated films, search your favorites, and explore details instantly.
                </p>
            </motion.div>

            <section style={styles.moviesSection}>
                <h2 style={styles.sectionTitle}>🎬 Popular Movies</h2>
                <div style={styles.moviesList}>
                    {featuredMovies.map((movie) => (
                        <motion.div
                            key={movie.id}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            style={styles.movieCard}
                        >
                            <Link to={`/movies/${movie.id}`} style={styles.link}>
                                <h3 style={styles.movieTitle}>{movie.title}</h3>
                                <p style={styles.movieYear}>Year: {movie.year}</p>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
};

const styles = {
    container: {
        minHeight: "100vh",
        padding: "2rem",
        color: "white",
    },
    hero: {
        textAlign: "center",
        marginBottom: "2rem",
    },
    welcome: {
        fontSize: "2.5rem",
        fontWeight: "bold",
    },
    subtitle: {
        fontSize: "1.1rem",
        marginTop: "0.5rem",
        color: "#ccc",
    },
    moviesSection: {
        maxWidth: "800px",
        margin: "0 auto",
    },
    sectionTitle: {
        fontSize: "1.5rem",
        marginBottom: "1.5rem",
        borderBottom: "1px solid rgba(255, 255, 255, 0.3)",
        paddingBottom: "0.5rem",
    },
    moviesList: {
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
    },
    movieCard: {
        padding: "1rem",
        borderRadius: "10px",
        backgroundColor: "rgba(255,255,255,0.05)",
        backdropFilter: "blur(5px)",
        transition: "all 0.3s ease",
    },
    link: {
        textDecoration: "none",
        color: "white",
    },
    movieTitle: {
        fontSize: "1.2rem",
        fontWeight: "bold",
    },
    movieYear: {
        fontSize: "0.9rem",
        color: "#aaa",
    },
};

export default HomePage;
