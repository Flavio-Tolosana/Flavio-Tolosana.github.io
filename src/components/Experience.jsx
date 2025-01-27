import "../css/Experience.css"
import { useTranslation } from 'react-i18next';

const Experience = () => {
    const { t } = useTranslation();
    return (
        <>
            <h2>{t('experience.title')}</h2>
            <div className="timelineColor">
                <div className="timeline">
                    <div className="containerTime left">
                        <div className="content">
                            <h3>English Communication through Transnational Online Projects course (EnComTOP)</h3>
                            <p> Participación en curso de la Universidad de Oulu (Finlandia) en otoño de 2024.
                                Desarrollé habilidades de trabajo en equipo participando de manera efectiva en inglés 
                                en un proyecto transnacional con personas de diferentes países europeos.
                            </p>
                            <a href="/docs/Flavio_Tolosana-EnComTOP_2024.pdf" target="_blank">See certificate</a>
                        </div>
                    </div>
                    <div className="containerTime right">
                        <div className="content">
                            <h3>International Space Apps Challenge (NASA)</h3>
                            <p>Participación en International Space Apps Challenge (NASA) del año 2022</p>
                        </div>
                    </div>
                    <div className="containerTime left">
                        <div className="content">
                            <h3>University Zaragoza EINA (2021-2025)</h3>
                            <p>Estudiante de la Universidad de Zaragoza en Ingeniería Informática</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Experience