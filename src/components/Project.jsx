import "../css/Projects.css"; // Importamos los estilos
import {
  Modal,
  ModalContent,
  useDisclosure,
} from "@heroui/react";
import PropTypes from "prop-types";
import { FaEye } from "react-icons/fa"; 
import { FaGithub, FaLink } from "react-icons/fa";
import Skill from "./Skill";

const Project = ({ photo, title, skills, text, urlGithub, urlDeploy }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {/* Botón con imagen */}
      <div className="project-container" onClick={onOpen}>
        <img src={photo} alt={title} className="project-image" />
        <div className="project-overlay">
          <FaEye className="project-icon" />
        </div>
      </div>

      {/* Modal */}
      <Modal backdrop="blur" isOpen={isOpen} onClose={onClose} className="max-w-4xl items-center">
        <ModalContent>
          {() => (
            <div className="modal-content">
              <h3 className="modal-title">{title}</h3>

              {/* Skills */}
              <div className="skills-container">
                {skills.map((skill, index) => (
                  <div key={index} className="w-10">
                    <Skill key={index} name={skill} />
                  </div>
                ))}
              </div>

              {/* Texto */}
              <p className="modal-text">{text}</p>

              {/* Botones de acción */}
              <div className="modal-buttons">
                <a href={urlGithub} className="modal-button github" target="_blank">
                  <FaGithub className="w-7 h-auto"/>
                </a>
                {urlDeploy && (
                  <a href={urlDeploy} className="modal-button deploy" target="_blank">
                    <FaLink className="w-7 h-auto"/>
                  </a>
                )}
              </div>
            </div>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

Project.propTypes = {
  photo: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
  text: PropTypes.string.isRequired,
  urlGithub: PropTypes.string.isRequired,
  urlDeploy: PropTypes.string,
};

export default Project;
