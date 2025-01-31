import { IoLogoJavascript } from "react-icons/io5";
import { SiCplusplus, SiExpress, SiMongodb, SiLatex} from "react-icons/si";
import { BsFiletypeSql } from "react-icons/bs";
import { BiLogoSpringBoot } from "react-icons/bi";
import { VscAzure } from "react-icons/vsc";
import { FaPython, FaReact, FaJava, FaHtml5, FaCss3Alt, FaGithub, FaDocker} from "react-icons/fa";
import { Tooltip } from "@nextui-org/react";

const Skill = ({name}) => {
    const skills = [
        { logo: <FaJava className="logo" style={{color: '#f25151'}}/>, alt: "Java" },
        { logo: <SiCplusplus className="logo" style={{color: '#1360ad'}}/>, alt: "C++" },
        { logo: <FaPython className="logo" style={{color: '#F5CD47'}}/>, alt: "Python"},
        { logo: <IoLogoJavascript className="logo" style={{color: '#e0d657'}}/>, alt: "JavaScript" },
        { logo: <FaReact className="logo" style={{color: '#04f6fa'}}/>, alt: "React" },
        { logo: <FaHtml5 className="logo" style={{color: '#efa61d'}}/>, alt: "HTML" },
        { logo: <FaCss3Alt className="logo" style={{color: '#54afff'}}/>, alt: "CSS" },
        { logo: <BsFiletypeSql className="logo" style={{color: 'black'}}/>, alt: "SQL" },
        { logo: <SiMongodb className="logo" style={{color: '#1db233'}}/>, alt: "MongoDB" },
        { logo: <BiLogoSpringBoot className="logo" style={{color: '#23ea40'}}/>, alt: "SpringBoot" },
        { logo: <SiExpress className="logo" style={{color: 'black'}}/>, alt: "Express" },
        { logo: <FaGithub className="logo" style={{color: 'black'}}/>, alt: "GitHub" },
        { logo: <FaDocker className="logo" style={{color: '#1280e2'}}/>, alt: "Docker" },
        { logo: <VscAzure className="logo" style={{color: '#18b9ff'}}/>, alt: "Azure" },
        { logo: <SiLatex className="logo" style={{color: '#12a569'}}/>, alt: "Latex" }
    ]

    const skill = skills.find((h) => h.alt === name);

    return (
        <Tooltip content={name} className="etiqueta-skill">
            <div className="skill">
                {skill ? skill.logo : <p>Skill not found</p>}
            </div>
        </Tooltip>
    )
}

export default Skill