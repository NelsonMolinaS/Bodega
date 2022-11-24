import { useState, createContext, useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { getLoginRequest } from "../api/api.login";

const contextLogged = createContext();

export const useLogged = () => {
  const context = useContext(contextLogged);
  return context;
};

export const LoggedProvider = ({ children }) => {
  const [logged, setLogged] = useState([]);

  const login = async (datos) => {
    const result = await getLoginRequest(datos);

    localStorage.setItem("user", JSON.stringify(result));
    setLogged(result.data);
    <Navigate to="/Inicio" replace />;
  };

  const logOut = () => {
    localStorage.clear();
    setLogged([]);
    <Navigate to="/Login" replace />;
  };

  const validateLogged = () => {
    return localStorage.getItem("user") ? false : true;
  };

  useEffect(() => {
    validateLogged();
  }, []);

  return (
    <contextLogged.Provider
      value={{
        logged,
        login,
        logOut,
        validateLogged,
        useLogged,
      }}
    >
      {children}
    </contextLogged.Provider>
  );
};
