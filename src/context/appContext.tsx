// src/context/state.js
import { createContext, useContext, useState, useMemo } from "react";

const AppContext = createContext({
  isMenuOpen: false,
  setMenuOpen: (a: boolean) => {},
  hsFormLoaded: false,
  setHsFormLoaded: (a: boolean) => {},
  startTime: Date.now(),
});

interface AppWrapper {
  children?: any;
}
export function AppWrapper({ children }: AppWrapper) {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [hsFormLoaded, setHsFormLoaded] = useState(false);

  const sharedState = useMemo(() => {
    return {
      isMenuOpen,
      setMenuOpen,
      hsFormLoaded,
      setHsFormLoaded,
      startTime: Date.now(),
    };
  }, [isMenuOpen, hsFormLoaded]);

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
