import React from 'react';
import Navbar from './components/Navbar';
import ProjectCard from './components/ProjectCard';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    const projects = [
        {
            title: "Sitio Web E-commerce",
            description: "Desarrollo de un sitio web de comercio electrónico utilizando React y Node.js.",
            imageUrl: "https://via.placeholder.com/300",
            projectUrl: "#"
        },
        {
            title: "Aplicación Móvil de Tareas",
            description: "Aplicación móvil para gestión de tareas desarrollada en Flutter.",
            imageUrl: "https://via.placeholder.com/300",
            projectUrl: "#"
        },
        {
            title: "Sistema de Gestión de Inventarios",
            description: "Sistema backend para gestión de inventarios con Django y PostgreSQL.",
            imageUrl: "https://via.placeholder.com/300",
            projectUrl: "#"
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
                        />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default App;