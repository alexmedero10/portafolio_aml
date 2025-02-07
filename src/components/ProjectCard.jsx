import React from 'react';

const ProjectCard = ({ title, description, imageUrl, projectUrl, technologies }) => {

    technologies = Array.isArray(technologies) ? technologies : [];
    
    return (
        <div className="col-md-4 mb-4">
            <div className="card h-100">
                <img src={imageUrl} className="card-img-top" alt={title} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <div className="mb-3">
                        <strong>Tecnologías:</strong>
                        <div className="d-flex gap-2 mt-2">
                            {technologies.map((tech, index) => (
                                <span key={index} className="tech-icon">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                    <a href={projectUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                        Ver Proyecto
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;