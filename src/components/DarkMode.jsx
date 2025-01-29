import { useState, useEffect } from "react";
import '../css/DarkMode.css'

const DarkMode = () => {
    // Obtener el tema guardado o usar "light" por defecto
    const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

    useEffect(() => {
        // Aplicar el tema al <html> para afectar toda la página
        document.documentElement.setAttribute("data-theme", theme);
        document.body.classList.toggle("dark-mode", theme === "dark");

        // Guardar la preferencia en localStorage
        localStorage.setItem("theme", theme);
    }, [theme]); // Se ejecuta cada vez que cambia el estado del tema

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
    };

    return (
        <button className={"darkModeButton"} onClick={toggleTheme}>
            {theme === "light" ? "LIGHT" : "DARK"}
        </button>
    );
}

export default DarkMode;
