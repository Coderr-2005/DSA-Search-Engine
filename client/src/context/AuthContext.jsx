import { createContext, useContext, useEffect, useState } from "react";
import api from "../services/api";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("user");
    return saved ? JSON.parse(saved) : null;
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUser = async () => {
      if (!user?.token) {
        setLoading(false);
        return;
      }

      try {
        const { data } = await api.get("/auth/profile", {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });

        setUser({
          ...data,
          token: user.token,
        });

        localStorage.setItem(
          "user",
          JSON.stringify({
            ...data,
            token: user.token,
          }),
        );
      } catch (err) {
        localStorage.removeItem("user");
        setUser(null);
      }

      setLoading(false);
    };

    checkUser();
  }, []);

  const register = async (formData) => {
    const { data } = await api.post("/auth/register", formData);

    setUser(data);
    localStorage.setItem("user", JSON.stringify(data));
  };

  const login = async (formData) => {
    const { data } = await api.post("/auth/login", formData);

    setUser(data);
    localStorage.setItem("user", JSON.stringify(data));
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        register,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
