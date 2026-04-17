import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);


  // check token on reload
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setUser({ token }); // simple for now
    }
  }, []);

  const login = (token) => {
    localStorage.setItem("token", token);
    setUser({ token });
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  

  };

  return (
    <Context.Provider value={{ user, login, logout }}>
      {children}
    </Context.Provider>
  );
};

// custom hook
export const useAuth = () => useContext(Context);