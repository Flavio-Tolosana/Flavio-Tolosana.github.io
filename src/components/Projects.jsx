import "../css/all.css"

const Projects = () => {

    return (
        <div id="projects">
            <h2>My Projects</h2>
            <section>
                <h2>FGP-Sishas</h2>
                <div className="project">
                    <img src="/images/FGP-Sishas.jpg"/>
                    <div className="overlay">
                        <a href="https://sisinf-tomcat.gentleplant-2c1be6ca.francecentral.azurecontainerapps.io/" className="button" target="_blank">Página Desplegada</a>
                        <a href="https://github.com/Flavio-Tolosana/FGP-Sishas" className="button" target="_blank">GitHub</a>
                    </div>
                </div>
            </section>
            <section>
                <h2>BlackJack - Master (backend)</h2>
                <div className="project">
                    <img src="/images/BlackJack-Master.jpg"/> 
                    <div className="overlay">
                        <a href="https://unizar-30226-2024-07.github.io/Frontend_Web/" className="button" target="_blank">Página Desplegada</a>
                        <a href="https://github.com/UNIZAR-30226-2024-07/backend" className="button" target="_blank">GitHub</a>
                    </div>
                </div>
            </section>
            <section>
                <h2>BlackJack - Master (frontend en web)</h2>
                <div className="project">
                    <img src="/images/BlackJack-Master.jpg"/> 
                    <div className="overlay">
                        <a href="https://unizar-30226-2024-07.github.io/Frontend_Web/" className="button" target="_blank">Página Desplegada</a>
                        <a href="https://github.com/UNIZAR-30226-2024-07/Frontend_Web" className="button" target="_blank">GitHub</a>
                    </div>
                </div>
            </section>
        </div>
    )

}

export default Projects