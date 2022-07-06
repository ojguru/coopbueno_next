// src/context/state.js
import { createContext, useContext, useState, useMemo } from "react";

const AppContext = createContext({});

interface AppWrapper {
  children?: any;
}
export function AppWrapper({ children }: AppWrapper) {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const sharedState = useMemo(() => {
    return {};
  }, []);

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
