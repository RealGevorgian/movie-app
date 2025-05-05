import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import MovieDetailPage from "../pages/MovieDetailPage";
import MoviesPage from "../pages/MoviesPage";
import FavoritesPage from "../pages/FavoritesPage";

import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        <PublicRoute>
                            <LoginPage />
                        </PublicRoute>
                    }
                />
                <Route
                    path="/home"
                    element={
                        <PrivateRoute>
                            <HomePage />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/movies"
                    element={
                        <PrivateRoute>
                            <MoviesPage />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/movies/:id"
                    element={
                        <PrivateRoute>
                            <MovieDetailPage />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/favorites"
                    element={
                        <PrivateRoute>
                            <FavoritesPage />
                        </PrivateRoute>
                    }
                />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </Router>
    );
}

export default AppRouter;
