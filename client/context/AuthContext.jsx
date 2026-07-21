import { createContext, useContext, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import api from "../api/axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [authDataLoading, setAuthDataLoading] = useState(true);
    const [sessionInitialized, setSessionInitialized] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const isLoginRoute = location.pathname === "/login";
        const isSignupRoute = location.pathname === "/signup";
        const isSearchRoute = location.pathname === "/search";

        if (sessionInitialized || isLoginRoute || isSignupRoute || isSearchRoute) {
            setAuthDataLoading(false);
            return;
        }

        const fetchSession = async () => {
            try {
                const res = await api.get("/user/user-data/me");
                setUser(res.data.data);
            } catch (err) {
                console.error("Unable to set global data", err.message);
                navigate("/login");
                setUser(null);
            } finally {
                setSessionInitialized(true);
                setAuthDataLoading(false);
            }
        };

        fetchSession();
    }, [sessionInitialized, location.pathname]);

    return (
        <AuthContext.Provider value={{ user, setUser, authDataLoading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};