import { useState, useEffect } from "react";
import "../css/LanguageButton.css";
import i18n from "../i18n";
import {Switch} from "@heroui/switch";

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
        <div className="language-button-fixed">
            <Switch 
                onChange={toggleLanguage}
                isSelected={language === en}
                endContent={<img src="/images/flags/spain.png" alt="Español" style={{ width: "24px", height: "18px" }} />}
                startContent={<img src="/images/flags/uk.png" alt="English" style={{ width: "18px", height: "15px" }} />}
                size="lg"
                color="secondary"
            />
        </div>
    );
};

export default LanguageButton;
