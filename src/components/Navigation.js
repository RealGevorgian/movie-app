import React from "react";
import { useNavigate } from "react-router-dom";

function Navigation() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/");
    };

    const navButtonStyle = {
        padding: "0.5rem 1rem",
        border: "1px solid white",
        backgroundColor: "transparent",
        color: "white",
        borderRadius: "6px",
        cursor: "pointer",
        fontSize: "0.9rem",
        transition: "all 0.3s ease"
    };

    return (
        <header style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "1rem"
        }}>
            <h1 style={{ margin: 0, fontSize: "1.8rem", color: "white" }}>🎬 Movie App</h1>
            <div style={{ display: "flex", gap: "1rem" }}>
                <button style={navButtonStyle} onClick={() => navigate("/home")}>npmHome</button>
                <button style={navButtonStyle} onClick={() => navigate("/favorites")}>⭐ Favorites</button>
                <button style={navButtonStyle} onClick={handleLogout}>🚪 Logout</button>
            </div>
        </header>
    );
}

export default Navigation;
