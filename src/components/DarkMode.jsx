import { useState, useEffect } from "react";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import {Switch} from "@heroui/switch";

import '../css/DarkMode.css'

const DarkMode = () => {
    const lightMode = 'light';
    const darkMode = 'dark';

    // Obtener el tema guardado o usar "light" por defecto
    const [theme, setTheme] = useState(() => localStorage.getItem("theme") || lightMode);

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
        <div className="switch-fixed">
            <Switch 
                onChange={toggleTheme}
                isSelected={theme === darkMode}
                endContent={<MdOutlineLightMode />}
                startContent={<MdOutlineDarkMode />}
                size="lg"
                color="secondary"
            />
        </div>
    );
}

export default DarkMode;
