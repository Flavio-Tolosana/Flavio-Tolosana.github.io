import "../css/all.css"

const Education = () => {
    return (
        <div id="education">
            <h2>My Education</h2>

            <div className="education-card">
                <img src="public/images/unizar.jpeg" alt="Zaragoza University" className="education-logo"/>
                <div className="education-content">
                    <h3>Ingeniería Informática</h3>
                    <p>Universidad de Zaragoza</p>
                    <p>Estudiante de 4º Curso</p>
                    <ul>
                        <li>Especialidad: <i>Computación</i></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Education