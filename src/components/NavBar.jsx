//import {Navbar, NavbarMenu, NavbarMenuItem, NavbarMenuToggle, NavbarContent, NavbarItem, Link} from "@nextui-org/react";
import { useState } from "react";

import "../css/all.css"


const NavBar = () => {

    const [activeSection, setActiveSection] = useState("home");

    const handleClick = (section) => {
        setActiveSection(section); // Actualizar la sección activa
    };

    return (
        // <nav>
        //     <ul>
        //         <li><a href="#home">Home</a></li>
        //         <li><a href="#projects">Projects</a></li>
        //         <li><a href="#skills">Skills</a></li>
        //         <li><a href="#experience">Experience</a></li>
        //         <li><a href="#education">Education</a></li>
        //         <li><a href="#contact">Contact</a></li>
        //     </ul>
        // </nav>

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


        // <Navbar isBordered>
        // <NavbarBrand>
        //     <p className="font-bold text-inherit">ACME</p>
        // </NavbarBrand>
        // <NavbarContent className="hidden sm:flex gap-4" justify="center">
        //     <NavbarItem>
        //     <Link color="foreground" href="#home">
        //         Home
        //     </Link>
        //     </NavbarItem>
        //     <NavbarItem isActive>
        //     <Link href="#" aria-current="#projects">
        //         Projects
        //     </Link>
        //     </NavbarItem>
        //     <NavbarItem>
        //     <Link color="foreground" href="#skills">
        //         Skills
        //     </Link>
        //     </NavbarItem>
        // </NavbarContent>
        // <NavbarContent justify="end">
        //     <NavbarItem className="hidden lg:flex">
        //     <Link href="#experience">Experience</Link>
        //     </NavbarItem>
        //     <NavbarItem>
        //     <Button as={Link} color="primary" href="#" variant="flat">
        //         Sign Up
        //     </Button>
        //     </NavbarItem>
        // </NavbarContent>
        // </Navbar>

        // const [isMenuOpen, setIsMenuOpen] = useState(false);

        // const [bold, setBold] = useState("")
      
        // return (
        //   <Navbar
        //     isBordered
        //     isMenuOpen={isMenuOpen}
        //     onMenuOpenChange={setIsMenuOpen}
        //     className="w-[100vw]"
        //   >
        //     <NavbarContent className="sm:hidden flex" justify="center">
        //       <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
        //     </NavbarContent>
      
        //     <NavbarContent className="hidden sm:flex gap-4 justify-center" 
        //       style={{ justifyContent: "center",}}
        //     >
        //       <NavbarItem isActive={bold == "menu"}>
        //         <Link 
        //           href="#proyectos"
        //           className="text-white text-[1.25rem]" aria-current="page">
        //           Proyectos
        //         </Link>
        //       </NavbarItem>
        //       <NavbarItem isActive={bold == "crear"}>
        //         <Link 
        //           href="#educacion"
        //           className="text-white text-[1.25rem]" 
        //           aria-current="page"
        //         >
        //           Educación
        //         </Link>
        //       </NavbarItem>
        //       <NavbarItem isActive={bold == "talleres"}>
        //         <Link 
        //           href="#habilidades"
        //           className="text-white text-[1.25rem]" 
        //           aria-current="page">
        //           Habilidades
        //         </Link>
        //       </NavbarItem>
        //     </NavbarContent>
      
        //     <NavbarMenu>
        //       <NavbarMenuItem>
        //         <Link
        //           className="w-full text-white"
        //           href="#proyectos"
        //           onClick={() => setIsMenuOpen(false)}
        //           size="lg"
        //         >
        //           Proyectos            
        //         </Link>
        //       </NavbarMenuItem>
        //       <NavbarMenuItem>
        //         <Link
        //           className="w-full text-white"
        //           href="#educacion"
        //           onClick={() => setIsMenuOpen(false)}
        //           size="lg"
        //         >
        //           Educación            
        //         </Link>
        //       </NavbarMenuItem>
        //       <NavbarMenuItem>
        //         <Link
        //           className="w-full text-white"
        //           href="#habilidades"
        //           onClick={() => setIsMenuOpen(false)}
        //           size="lg"
        //         >
        //           Habilidades            
        //         </Link>
        //       </NavbarMenuItem>
        //     </NavbarMenu>
        //   </Navbar>
    )
}

export default NavBar