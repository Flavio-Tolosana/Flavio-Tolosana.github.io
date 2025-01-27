import { useState } from "react";
import "../css/LanguageButton.css";
import i18n from "../i18n";

const LanguageButton = () => {
    const es = 'es';
    const en = 'en';
    const [language, setLanguage] = useState(es);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setLanguage(lng);
    };

    return (
            <button className="languageButton"
                    onClick={() => changeLanguage(language === es ? en : es)}>
                <img 
                    src={language === es ? "/images/flags/spain.png" : "/images/flags/uk.png"}
                    alt={language === es ? "Español" : "English"}
                    className="flagLanguage"
                />
            </button>
    );
};

export default LanguageButton;
