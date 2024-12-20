import "../css/Skills.css"

const Skills = () => {
    return (
        <>
            <h2>My Skills</h2>
            <ul className="skills-list">
                <li className="skill-item">
                    <img src="/images/skills/html-1.svg" alt="HTML"/>
                    <p>HTML</p>
                </li>
                <li className="skill-item">
                    <img src="/images/skills/css-3.svg" alt="CSS"/>
                    <p>CSS</p>
                </li>
                <li className="skill-item">
                    <img src="/images/skills/nodejs-3.svg" alt="Node JS"/>
                    <p>Node JS</p>
                </li>
                <li className="skill-item">
                    <img src="/images/skills/java-4.svg" alt="Java"/>
                    <p>Java</p>
                </li>
                <li className="skill-item">
                    <img src="/images/skills/spring-3.svg" alt="SpringBoot"/>
                    <p>SpringBoot</p>
                </li>
                <li className="skill-item">
                    <img src="/images/skills/c-1.svg" alt="C"/>
                    <p>C</p>
                </li>
                <li className="skill-item">
                    <img src="/images/skills/c.svg" alt="C++"/>
                    <p>C++</p>
                </li>
            </ul>
        </>
    )
}

export default Skills