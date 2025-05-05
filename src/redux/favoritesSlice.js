import { createSlice } from "@reduxjs/toolkit";

const loadFromLocalStorage = () => {
    try {
        const data = localStorage.getItem("favorites");
        return data ? JSON.parse(data) : [];
    } catch {
        return [];
    }
};

const saveToLocalStorage = (favorites) => {
    try {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    } catch {}
};

const favoritesSlice = createSlice({
    name: "favorites",
    initialState: loadFromLocalStorage(),
    reducers: {
        addFavorite: (state, action) => {
            const exists = state.some((m) => m.id === action.payload.id);
            if (!exists) {
                state.push(action.payload);
                saveToLocalStorage(state);
            }
        },
        removeFavorite: (state, action) => {
            const filtered = state.filter((m) => m.id !== action.payload);
            saveToLocalStorage(filtered);
            return filtered;
        },
    },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
