export const isAuthenticated = () => {
    return !!localStorage.getItem("token");
};


export const login = () => {
    localStorage.setItem('auth', 'true');
};

export const logout = () => {
    localStorage.removeItem('auth');
};
