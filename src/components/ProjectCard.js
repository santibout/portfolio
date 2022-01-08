import React from 'react';
import "../css/projects.css";

const ProjectCard = props => {
    return (
        <div className="card-container">
            <a
                href={props.link}
                target="_blank"
                rel="noopener noreferrer"
            >
                <div className="list-item">
                    <div className="list-item-pic">
                        <img src={props.image} alt={props.alt} />
                    </div>
                    <div className="list-item-description">
                        <div className="description-title">
                            <h2>{props.title}</h2>
                        </div>
                        <div className="description-body">
                            {props.description}
                            <p>------------------</p>
                            {props.disclaimer}
                        </div>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default ProjectCard;