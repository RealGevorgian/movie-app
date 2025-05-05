import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import FavoritesPage from "./pages/FavoritesPage";
import MovieDetailPage from "./pages/MovieDetailPage";
import StaticMovieDetailPage from "./pages/StaticMovieDetailPage";

function ProtectedRoute({ children }) {
    const token = localStorage.getItem("token");
    return token ? children : <Navigate to="/" />;
}

function App() {
    return (
        <Router>
            <Routes>
                {/* Public Route */}
                <Route path="/" element={<LoginPage />} />

                {/* Protected Routes */}
                <Route path="/home" element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
                <Route path="/movies" element={<ProtectedRoute><MoviesPage /></ProtectedRoute>} />
                <Route path="/favorites" element={<ProtectedRoute><FavoritesPage /></ProtectedRoute>} />
                <Route path="/movies/:id" element={<ProtectedRoute><MovieDetailPage /></ProtectedRoute>} />
                <Route path="/static-movie/:id" element={<ProtectedRoute><StaticMovieDetailPage /></ProtectedRoute>} />

                {/* Fallback */}
                <Route path="*" element={<div style={{ color: "white", padding: "2rem" }}>404 - Page Not Found</div>} />
            </Routes>
        </Router>
    );
}

export default App;
