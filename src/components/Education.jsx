import "../css/Education.css"

const Education = () => {
    return (
        <>
            <h2>My Education</h2>

            <div className="education-card">
                <img src="/images/unizar.jpeg" alt="Zaragoza University" className="education-logo"/>
                <div className="education-content">
                    <h3>Ingeniería Informática</h3>
                    <p>Universidad de Zaragoza</p>
                    <p>Estudiante de 4º Curso</p>
                    <ul>
                        <li>Especialidad: <i>Computación</i></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Education