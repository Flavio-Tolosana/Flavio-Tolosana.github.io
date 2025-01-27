import { useState, useEffect } from "react";

import "../css/NavBar.css"
import { useTranslation } from 'react-i18next';

const NavBar = () => {

    const [activeSection, setActiveSection] = useState("home");
    const { t } = useTranslation();

    // useEffect(() => {
    //     const handleScroll = () => {
    //         const sections = document.querySelectorAll("div");
    //         let currentSection = "home";

    //         // Check the position of each section relative to the viewport
    //         sections.forEach((section) => {
    //             const rect = section.getBoundingClientRect();
    //             const sectionTop = rect.top;
    //             const sectionBottom = rect.bottom;

    //             // If the section is mostly in view, consider it active
    //             if (sectionTop <= window.innerHeight / 2 && sectionBottom >= window.innerHeight / 2) {
    //                 currentSection = section.id;
    //             }
    //         });

    //         // Update the active section
    //         if (currentSection !== activeSection) {
    //             setActiveSection(currentSection);
    //         }
    //     };

    //     window.addEventListener("scroll", handleScroll);

    //     return () => {
    //         window.removeEventListener("scroll", handleScroll); // Cleanup on unmount
    //     };
    // }, [activeSection]);

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
                    {t('home.title')}
                </a>
            </li>
            <li>
                <a 
                    href="#projects" 
                    className={activeSection === "projects" ? "active" : ""} 
                    onClick={() => handleClick("projects")}
                >
                    {t('projects.title')}
                </a>
            </li>
            <li>
                <a 
                    href="#skills" 
                    className={activeSection === "skills" ? "active" : ""} 
                    onClick={() => handleClick("skills")}
                >
                    {t('skills.title')}
                </a>
            </li>
            <li>
                <a 
                    href="#experience" 
                    className={activeSection === "experience" ? "active" : ""} 
                    onClick={() => handleClick("experience")}
                >
                    {t('experience.title')}
                </a>
            </li>
            <li>
                <a 
                    href="#education" 
                    className={activeSection === "education" ? "active" : ""} 
                    onClick={() => handleClick("education")}
                >
                    {t('education.title')}
                </a>
            </li>
            <li>
                <a 
                    href="#contact" 
                    className={activeSection === "contact" ? "active" : ""} 
                    onClick={() => handleClick("contact")}
                >
                    {t('contact.title')}
                </a>
            </li>
        </ul>
        </nav>
    )
}

export default NavBar