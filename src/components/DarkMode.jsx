import { useState, useEffect } from "react";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

import '../css/DarkMode.css'

const DarkMode = () => {
    // Obtener el tema guardado o usar "light" por defecto
    const [theme, setTheme] = useState(() => localStorage.getItem("theme") || lightMode);

    const lightMode = 'light';
    const darkMode = 'dark';

    useEffect(() => {
        // Aplicar el tema al <html> para afectar toda la página
        document.documentElement.setAttribute("data-theme", theme);
        document.body.classList.toggle("dark-mode", theme === darkMode);

        // Guardar la preferencia en localStorage
        localStorage.setItem("theme", theme);
    }, [theme]); // Se ejecuta cada vez que cambia el estado del tema

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === lightMode ? darkMode : lightMode));
    };

    return (
        <button className={"darkModeButton"} onClick={toggleTheme}>
            {theme === lightMode ? <MdOutlineLightMode className="modeLight"/> : <MdOutlineDarkMode className="modeLight"/> }
        </button>
    );
}

export default DarkMode;
