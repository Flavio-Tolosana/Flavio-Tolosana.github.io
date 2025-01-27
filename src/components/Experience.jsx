import "../css/Experience.css"
import { useTranslation } from 'react-i18next';

const Experience = () => {
    const { t } = useTranslation();
    return (
        <>
        <h2>{t("experience.title")}</h2>
        <div className="timelineColor">
            <div className="timeline">
            {t("experience.list", { returnObjects: true }).map((item, index) => (
                <div
                key={index}
                className={`containerTime ${index % 2 === 0 ? "left" : "right"}`}
                >
                <div className="content">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    {item.title.includes("English Communication") && (
                    <a
                        href="/docs/Flavio_Tolosana-EnComTOP_2024.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {t("experience.certificate")}
                    </a>
                    )}
                </div>
                </div>
            ))}
            </div>
        </div>
        </>
    );
};

export default Experience