import { useState } from "react";

import "../css/NavBar.css"

const NavBar = () => {

    const [activeSection, setActiveSection] = useState("home");

    const handleClick = (section) => {
        setActiveSection(section); // Actualizar la sección activa
    };

    return (
        <nav>
        <ul>
            <li>
                <a 
                    href="#home" 
                    className={activeSection === "home" ? "active" : ""} 
                    onClick={() => handleClick("home")}
                >
                    Home
                </a>
            </li>
            <li>
                <a 
                    href="#projects" 
                    className={activeSection === "projects" ? "active" : ""} 
                    onClick={() => handleClick("projects")}
                >
                    Projects
                </a>
            </li>
            <li>
                <a 
                    href="#skills" 
                    className={activeSection === "skills" ? "active" : ""} 
                    onClick={() => handleClick("skills")}
                >
                    Skills
                </a>
            </li>
            <li>
                <a 
                    href="#experience" 
                    className={activeSection === "experience" ? "active" : ""} 
                    onClick={() => handleClick("experience")}
                >
                    Experience
                </a>
            </li>
            <li>
                <a 
                    href="#education" 
                    className={activeSection === "education" ? "active" : ""} 
                    onClick={() => handleClick("education")}
                >
                    Education
                </a>
            </li>
            <li>
                <a 
                    href="#contact" 
                    className={activeSection === "contact" ? "active" : ""} 
                    onClick={() => handleClick("contact")}
                >
                    Contact
                </a>
            </li>
        </ul>
        </nav>
    )
}

export default NavBar