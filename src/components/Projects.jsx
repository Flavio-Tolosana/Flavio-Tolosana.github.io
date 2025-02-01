import "../css/Projects.css";
import { useTranslation } from "react-i18next";
import Project from "./Project"; // Importamos el componente reutilizable

const Projects = () => {
  const { t } = useTranslation();

  // Array de proyectos
  const projects = [
    {
      title: "FGP-Sishas",
      photo: "/images/FGP-Sishas.jpg",
      skills: ["Java", "SQL", "HTML", "CSS", "GitHub"],
      text: t('projects.textProjects.sishas'),
      urlGithub: "https://github.com/Flavio-Tolosana/FGP-Sishas",
      urlDeploy: "https://sisinf-tomcat.gentleplant-2c1be6ca.francecentral.azurecontainerapps.io/",
    },
    {
      title: "BlackJack - Master (backend)",
      photo: "/images/BlackJack-Master.jpg",
      skills: ["Express", "MongoDB", "GitHub"],
      text: t('projects.textProjects.backBJ'),
      urlGithub: "https://github.com/UNIZAR-30226-2024-07/backend",
      urlDeploy: "https://unizar-30226-2024-07.github.io/Frontend_Web/",
    },
    {
      title: "BlackJack - Master (frontend en web)",
      photo: "/images/BlackJack-Master.jpg",
      skills: ["React", "JavaScript", "CSS", "GitHub"],
      text: t('projects.textProjects.frontBJ'),
      urlGithub: "https://github.com/UNIZAR-30226-2024-07/Frontend_Web",
      urlDeploy: "https://unizar-30226-2024-07.github.io/Frontend_Web/",
    },
  ];

  return (
    <>
      <h2>{t("projects.title")}</h2>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {projects.map((project, index) => (
          <Project
            key={index}
            photo={project.photo}
            title={project.title}
            skills={project.skills}
            text={project.text}
            urlGithub={project.urlGithub}
            urlDeploy={project.urlDeploy}
          />
        ))}
      </div>
    </>
  );
};

export default Projects;
