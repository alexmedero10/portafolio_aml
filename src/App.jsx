import React from 'react';
import Navbar from './components/Navbar';
import ProjectCard from './components/ProjectCard';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DiJavascript, DiJava, DiReact, DiHtml5, DiCss3, DiPython } from "react-icons/di";
import { SiSpringboot } from "react-icons/si"
import { TbBrandCSharp } from "react-icons/tb"

const App = () => {
    const projects = [
        {
            title: "Algoritmo Bron-Kerbosch",
            description: "Algoritmo que encuentra el máximo clique en un grafo. El máximo clique se define como el subconjunto de vértices de un grafo donde todos los vértices están completamente conectados entre sí ",
            imageUrl: "/cliqueMaximo.png",
            projectUrl: "https://github.com/ErikGarfia/Algorithms-Project",
            technologies: [<DiPython />]
        },
        {
            title: "API Fraudes",
            description: "API desarollada con Spring con la tarea de banear y desbanear IP's",
            imageUrl: "https://github.com/alexmedero10/AcademiaIBM_Fraude/raw/master/assets/banearIp.png",
            projectUrl: "https://github.com/alexmedero10/AcademiaIBM_Fraude",
            technologies: [<SiSpringboot />, <DiJava />]
        },
        {
            title: "Elevadores WeWork Polanco",
            description: "Sistema que maneja las solicitudes a un elevador del personal corportativo, verificando si tienen permiso para acceder al piso destino.",
            imageUrl: "https://colivingcdmx.com.mx/wp-content/uploads/Coworking-Polanco-Work-Polanco.jpeg",
            projectUrl: "#",
            technologies: [<TbBrandCSharp />]
        }
    ];

    return (
        <div>
            <Navbar />
            <div className="container my-5">
                <h1 className="text-center mb-4">Proyectos Destacados</h1>
                <div className="row">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            title={project.title}
                            description={project.description}
                            imageUrl={project.imageUrl}
                            projectUrl={project.projectUrl}
                            technologies={project.technologies}
                        />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default App;