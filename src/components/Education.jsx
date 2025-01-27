import "../css/Education.css"
import { useTranslation } from 'react-i18next';


const Education = () => {
    const { t } = useTranslation();
    return (
        <>
            <h2>{t('education.title')}</h2>

            <div className="education-card">
                <img src="/images/unizar.jpeg" alt="Zaragoza University" className="education-logo"/>
                <div className="education-content">
                    <h3>{t('education.degree')}</h3>
                    <p>{t('education.university')}</p>
                    <p>{t('education.year')}</p>
                    <ul>
                        <li>{t('education.especialidad')}<i>{t('education.computing')}</i></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Education