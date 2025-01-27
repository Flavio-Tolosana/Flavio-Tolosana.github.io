import Contact from "../components/Contact"
import Education from "../components/Education"
import Experience from "../components/Experience"
import Header from "../components/Header"
import LanguageButton from "../components/LanguageButton"
import NavBar from "../components/NavBar"
import Projects from "../components/Projects"
import Skills from "../components/Skills"

import "../css/Home.css"

const Home = () => {
    return (            
    
        <div className="home" id="home">
            <NavBar/>
            <div className="no-nav">
                <Header/>
                <main>
                    <div id="projects"><Projects/></div>
                    <div id="skills"><Skills/></div>
                    <div id="experience"><Experience/></div>
                    <div id="education"><Education/></div>
                    <div id="contact"><Contact/></div>
                </main>
                <LanguageButton/>
                <footer>
                    <p>&copy; 2024 Flavio Tolosana Hernando</p>
                </footer>
            </div>

        </div>
    )
}

export default Home