import { createContext, useEffect, useState } from "react";

export type THEME = "default" | "shadow";

export type THEME_CONTEXT = {
    theme: THEME,
    updateTheme: (theme: THEME) => void
}



export const ThemeContext = createContext<THEME_CONTEXT | null>(null);
const AVAIABLE_THEME: THEME[] = ['default', 'shadow'];
export function ThemesProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<THEME>('default');
   

    function updateTheme(theme: THEME) {
        setTheme(theme);
        localStorage.setItem("theme", theme);
        document.querySelector("html")?.setAttribute("data-theme", theme);
    }

    useEffect(() => {
        const currentTheme = localStorage.getItem("theme") as THEME | null;
        console.log(currentTheme, "CurrentTheme")
        if (currentTheme && AVAIABLE_THEME.includes(currentTheme)) {

            setTheme(currentTheme);
            document.querySelector("html")?.setAttribute("data-theme", currentTheme);
        }
    }, []);
    return (
        
        <ThemeContext.Provider value={{
            theme,
            updateTheme
        }}>
            {children}
        </ThemeContext.Provider>
    )

}