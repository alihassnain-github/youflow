"use client"

import { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface ThemeContextInterface {
    theme: string;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextInterface | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {

    const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

    useEffect(() => {
        localStorage.setItem("theme", theme);
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    function toggleTheme() {
        setTheme(prev => prev === "dark" ? "light" : "dark");
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme() {
    return useContext(ThemeContext);
}