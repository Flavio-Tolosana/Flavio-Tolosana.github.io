import { useState, useEffect } from "react";
import "../css/LanguageButton.css";
import i18n from "../i18n";

const LanguageButton = () => {
    const es = 'es';
    const en = 'en';

    // Cargar idioma desde localStorage o usar español por defecto
    const [language, setLanguage] = useState(() => localStorage.getItem("language") || es);

    useEffect(() => {
        i18n.changeLanguage(language);
        localStorage.setItem("language", language);
    }, [language]);

    const toggleLanguage = () => {
        setLanguage(prevLang => (prevLang === es ? en : es));
    };

    return (
        <button className="languageButton" onClick={toggleLanguage}>
            <img 
                src={language === es ? "/images/flags/spain.png" : "/images/flags/uk.png"}
                alt={language === es ? "Español" : "English"}
                className="flagLanguage"
            />
        </button>
    );
};

export default LanguageButton;
