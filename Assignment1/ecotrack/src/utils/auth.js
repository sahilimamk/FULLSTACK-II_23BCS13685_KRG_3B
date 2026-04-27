export const isLoggedIn = () => !!localStorage.getItem("eco_token");
export const login = () => localStorage.setItem("eco_token", "fake-token-123");
export const logout = () => localStorage.removeItem("eco_token");
