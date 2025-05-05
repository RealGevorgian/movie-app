import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function LoginPage() {
    const [username, setUsername] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (!username.trim()) {
            alert("Username is required.");
            return;
        }
        const fakeToken = username + "_token";
        localStorage.setItem("token", fakeToken);
        window.dispatchEvent(new Event("storage"));
        navigate("/home");
    };

    return (
        <motion.div
            style={styles.container}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <h1 style={styles.title}>Login</h1>
            <form onSubmit={handleLogin} style={styles.form}>
                <motion.input
                    type="text"
                    placeholder="Enter username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    style={styles.input}
                    whileFocus={{ scale: 1.03 }}
                />
                <motion.button
                    type="submit"
                    style={styles.button}
                    whileHover={{ scale: 1.05 }}
                >
                    Login
                </motion.button>
            </form>
        </motion.div>
    );
}

const styles = {
    container: {
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white"
    },
    title: {
        fontSize: "2rem",
        marginBottom: "1rem"
    },
    form: {
        display: "flex",
        flexDirection: "column",
        gap: "1rem"
    },
    input: {
        padding: "0.5rem",
        fontSize: "1rem",
        borderRadius: "6px",
        border: "1px solid #ccc",
        width: "250px"
    },
    button: {
        padding: "0.5rem",
        fontSize: "1rem",
        borderRadius: "6px",
        border: "none",
        cursor: "pointer",
        backgroundColor: "#4caf50",
        color: "white"
    }
};

export default LoginPage;
