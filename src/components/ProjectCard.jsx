import React from 'react';

const ProjectCard = ({ title, description, imageUrl, projectUrl }) => {
    return (
        <div className="col-md-4 mb-4">
            <div className="card h-100">
                <img src={imageUrl} className="card-img-top" alt={title} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href={projectUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                        Ver Proyecto
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;