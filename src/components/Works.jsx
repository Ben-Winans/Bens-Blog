import React from 'react';
import ProjectCard from './ProjectCard';
import styles from './Works.module.css';

const Works = () => {
    const project = {
        image: 'path/to/image.png', 
        title: 'Autonomous Vehicle HCI study',
        description: 'Year-long development of research assisting software',
        tags: ['React', 'Styled-Components', 'Docker', 'Jest']
    };

    return (
        <div className={styles.worksContainer}>
            <div className={styles.worksTitle}>Some of my recent works</div>
            <div className={styles.cardsContainer}>
                <ProjectCard 
                    image={project.image} 
                    title={project.title} 
                    description={project.description} 
                    tags={project.tags} 
                />
                <ProjectCard 
                    image={project.image} 
                    title={project.title} 
                    description={project.description} 
                    tags={project.tags} 
                />
                <ProjectCard 
                    image={project.image} 
                    title={project.title} 
                    description={project.description} 
                    tags={project.tags} 
                />
            </div>
        </div>
    );
};

export default Works;
