import "../css/Skills.css"
import Skill from "./Skill"
import "../index.css"
import { useTranslation } from 'react-i18next';

const Skills = () => {
    const { t } = useTranslation();

    const habilidades = [
        "Java",
        // "C",
        "C++",
        "Python",
        "JavaScript",
        "React",
        "HTML",
        "CSS",
        "SQL",
        "MongoDB",
        "SpringBoot",
        "Express",
        "GitHub",
        // "Docker",
        // "Azure",
        "Latex"
    ]
    return (
        <>
            <h2>{t('skills.title')}</h2>
    
            <ul className="skills ">
                {habilidades.map((h, idx) => (
                    <li key={idx} className="box-skill">
                        <Skill name={h}/>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Skills