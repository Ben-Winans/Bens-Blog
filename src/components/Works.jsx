import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import Modal from './Modal';
import styles from './Works.module.css';
import AV_title_1 from '../assets/AV_title_1.png';
import AV_title_2 from '../assets/AV_title_2.png';
import OS_title from '../assets/OS_title.png';
import PP_title from '../assets/PP_title.png';

const Works = () => {
    const [isAVModalOpen, setAVModalOpen] = useState(false);
    const [isOSModalOpen, setOSModalOpen] = useState(false);
    const [isPPModalOpen, setPPModalOpen] = useState(false);

    const AV = {
        image: [AV_title_1,AV_title_2 ],
        title: 'Autonomous Vehicle HCI study',
        description: 'Year-long development of research assisting software',
        tags: ['Full Stack', 'SERN', 'Javascript', 'HTML', 'css', 'Redux', 'Docker', 'Jest', 'Axios', 'styled-components', 'Sequelize']
    };
    const OS = {
        image: OS_title, 
        title: 'Operating Systems',
        description: 'Collection of Linux based C/C++ projects',
        tags: ['Linux', 'CLI', 'Bash', 'VScode', 'C', 'C++', 'VM', 'gtest']
    };
    const PP = {
        image: PP_title, 
        title: 'Personal Portfolio V1',
        description: 'First version of my personal portfolio featuring a from scratch design.',
        tags: ['Figma', 'React', 'GitHub Pages', 'Javascript', 'HTML', 'css']
    };

    const openModal = (modalSetter) => {
        modalSetter(true);
    };

    const closeModal = (modalSetter) => {
        modalSetter(false);
    };

    return (
        <div className={styles.worksContainer}>
            <div className={styles.worksTitle}>Some of my recent works</div>
            <div className={styles.cardsContainer}>
                <div onClick={() => openModal(setAVModalOpen)}>
                    <ProjectCard 
                        image={AV.image} 
                        title={AV.title} 
                        description={AV.description} 
                        tags={AV.tags} 
                    />
                </div>
                <div onClick={() => openModal(setOSModalOpen)}>
                    <ProjectCard 
                        image={OS.image} 
                        title={OS.title} 
                        description={OS.description} 
                        tags={OS.tags} 
                    />
                </div>
                <div onClick={() => openModal(setPPModalOpen)}>
                    <ProjectCard 
                        image={PP.image} 
                        title={PP.title} 
                        description={PP.description} 
                        tags={PP.tags} 
                    />
                </div>
            </div>
            {/* Modals for each project */}
            <Modal 
                isOpen={isAVModalOpen} 
                onClose={() => closeModal(setAVModalOpen)}
                title={AV.title}
                images={AV.image} 
                description={AV.description}
                tags={AV.tags}
            />
            <Modal 
                isOpen={isOSModalOpen} 
                onClose={() => closeModal(setOSModalOpen)}
                title={OS.title}
                images={[OS.image]} // Wrap in array to match the expected format
                description={OS.description}
                tags={OS.tags}
            />
            <Modal 
                isOpen={isPPModalOpen} 
                onClose={() => closeModal(setPPModalOpen)}
                title={PP.title}
                images={[PP.image]} // Wrap in array to match the expected format
                description={PP.description}
                tags={PP.tags}
            />

        </div>
    );
};

export default Works;
