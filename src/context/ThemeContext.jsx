import { createContext, useState } from "react";

export const ThemeContext = createContext()

export default function ThemeProvider({ children }) {
    
    const [theme, setTheme] = useState("light")

    const [user, setUser] = useState({
        name: "",
        email: ""
    })

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme, user, setUser}}>{children}</ThemeContext.Provider>
    )
}  