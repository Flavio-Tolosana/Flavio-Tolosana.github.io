import Contact from "../components/Contact"
import Education from "../components/Education"
import Experience from "../components/Experience"
import Header from "../components/Header"
import NavBar from "../components/NavBar"
import Projects from "../components/Projects"
import Skills from "../components/Skills"

import "../css/all.css"

const Home = () => {
    return (            
    
        <div className="home" id="home">

            <div className="nav">
                <NavBar/>
            </div>
            <div className="no-nav">
                <header><Header/></header>
                <main className="container">
                    <Projects/>
                    <Skills/>
                    <Experience/>
                    <Education/>
                    <Contact/>
                </main>
                <footer>
                    <p>&copy; 2024 Flavio Tolosana Hernando</p>
                </footer>
            </div>

        </div>
    )
}

export default Home