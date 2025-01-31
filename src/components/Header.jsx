import "../css/Header.css"
import { useTranslation } from 'react-i18next';
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Header = () => {
    const { t } = useTranslation();
    return (
        <header>
            <h1>Flavio Tolosana Hernando</h1>
            <img className="img-fla" src="/images/flavio.jpg"/>
            <p className="w-[50%]">{t('home.text')}</p>
            <div className="h-buttons">
                <a className="bn30 logo-button" href="https://github.com/Flavio-Tolosana" target="_blank">
                    <FaGithub className="logo-button-img"/>
                </a>
                <a className="bn30 logo-button" href="https://www.linkedin.com/in/flavio-tolosana-hernando/" target="_blank">
                    <FaLinkedin className="logo-button-img"/>
                </a>
                <a className="bn30" href="/docs/Flavio_Tolosana-CV.pdf" target="_blank">{t('home.cv')}</a>
            </div>      
        </header>
    )
}

export default Header