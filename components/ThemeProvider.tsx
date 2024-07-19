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

  return (
    <ThemeContext.Provider value={{ isMenuOpen, setMenuOpen, token, setToken }}>
      {children}
    </ThemeContext.Provider>
  );
}
