import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const baseButtonStyle = {
    padding: "0.5rem 1rem",
    border: "1px solid white",
    borderRadius: "6px",
    background: "transparent",
    color: "white",
    cursor: "pointer",
    transition: "all 0.3s ease",
    fontWeight: "500",
    transform: "scale(1)"
};

function NavigationBar() {
    const navigate = useNavigate();
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleMouseEnter = (index) => setHoveredIndex(index);
    const handleMouseLeave = () => setHoveredIndex(null);

    const buttons = [
        { label: " Home", action: () => navigate("/home") },
        { label: "🔍 Search Movies", action: () => navigate("/movies") },
        { label: "⭐ Favorites", action: () => navigate("/favorites") },
        {
            label: "Logout",
            action: () => {
                localStorage.removeItem("token");
                window.dispatchEvent(new Event("storage"));
                navigate("/");
            }
        }
    ];

    return (
        <nav style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "1rem",
            borderBottom: "1px solid #ccc"
        }}>
            <motion.h2
                style={{ color: "white", margin: 0, display: "flex", alignItems: "center" }}
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
            >
                🎬 Movie App
            </motion.h2>

            <div style={{ display: "flex", gap: "1rem" }}>
                {buttons.map((btn, i) => (
                    <button
                        key={i}
                        onClick={btn.action}
                        style={{
                            ...baseButtonStyle,
                            backgroundColor: hoveredIndex === i ? "#5e1f74" : "transparent",
                            transform: hoveredIndex === i ? "scale(1.07)" : "scale(1)"
                        }}
                        onMouseEnter={() => handleMouseEnter(i)}
                        onMouseLeave={handleMouseLeave}
                    >
                        {btn.label}
                    </button>
                ))}
            </div>
        </nav>
    );
}

export default NavigationBar;
