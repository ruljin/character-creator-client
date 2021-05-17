import { useState, createContext, useEffect } from "react";
import { setInStorage } from "../utils/setInStorage";
import { getFromStorage } from "../utils/getFromStorage";

const AuthorizationContext = createContext(null);

const AuthorizationProvider = ({ children, value }) => {
  return (
    <AuthorizationContext.Provider value={value}>
      {children}
    </AuthorizationContext.Provider>
  );
};

const useAuthorization = () => {
  const authenticationStorage = getFromStorage("authentication");
  const characterStorage = getFromStorage("character");
  const [character, setCharacter] = useState(
    characterStorage ? JSON.parse(characterStorage) : null
  );
  const [isAuthenticated, setIsAuthenticated] = useState(
    authenticationStorage ? true : false
  );

  useEffect(() => {
    if (character) {
      setInStorage("character", JSON.stringify(character));
    }
  }, [character]);

  useEffect(() => {
    if (isAuthenticated) {
      setInStorage("authentication", JSON.stringify(isAuthenticated));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  return {
    character,
    isAuthenticated,
    onSetAuthentication: setIsAuthenticated,
    onSetCharacter: setCharacter,
  };
};

export { AuthorizationContext, AuthorizationProvider, useAuthorization };
