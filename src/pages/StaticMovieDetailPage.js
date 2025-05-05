import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";

const staticMovies = [
    {
        id: "1",
        title: "Oppenheimer",
        year: "2023",
        description: "The story of J. Robert Oppenheimer and the development of the atomic bomb.",
    },
    {
        id: "2",
        title: "Dune: Part Two",
        year: "2024",
        description: "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators.",
    },
    {
        id: "3",
        title: "Killers of the Flower Moon",
        year: "2023",
        description: "Members of the Osage tribe in the United States are murdered under mysterious circumstances.",
    },
];

function StaticMovieDetailPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const movie = staticMovies.find((m) => m.id === id);

    if (!movie) {
        return <div style={{ color: "white", padding: "2rem" }}>Movie not found</div>;
    }

    return (
        <div style={{ color: "white", padding: "2rem" }}>
            <NavigationBar />
            <h1>{movie.title}</h1>
            <p><strong>Year:</strong> {movie.year}</p>
            <p><strong>Description:</strong> {movie.description}</p>
            <button onClick={() => navigate("/home")} style={{ marginTop: "1rem" }}>← Back to Home</button>
        </div>
    );
}

export default StaticMovieDetailPage;
