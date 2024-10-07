"use client";

import { createContext, useState } from "react";

const f: any = () => {};

export const ThemeContext = createContext({});

interface providerProps {
  children: React.ReactNode;
}
export default function ThemeProvider({ children }: providerProps) {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [token, setToken] = useState("");
  const [hsFormLoaded, setHsFormLoaded] = useState(false);
  const [startTime, setStartTime] = useState(Date.now());

  return (
    <ThemeContext.Provider
      value={{
        isMenuOpen,
        setMenuOpen,
        token,
        setToken,
        hsFormLoaded,
        setHsFormLoaded,
        startTime,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
