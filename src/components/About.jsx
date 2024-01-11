import React from 'react';
import styles from './About.module.css';
import aboutImage from '../assets/About_img.png'

const About = () => {
    return (
        <div className={styles.aboutContainer}>
            <div className={styles.leftSection}>
                <div className={styles.aboutTitle}>
                    <h1>Hi! I'm Ben, a Full Stack Developer from Florida.</h1>
                </div>
                <div className={styles.aboutBody}>
                    <p>I love building applications that are scalable, impactful and creative.</p>
                    <p>I studied Computer Engineering at the University of Florida where I gained experience in Web-development, Operating Systems, Cyber-security and IOT technology. I spent 1 year working as the sole technical contributor to a full-stack application where I learned how to fulfil a project from ideation to completion. </p>
                    <p>In these experiences I’ve learned how to work independently and on small teams, both specialized and cross-functional. My work style emphasizes being easy to approach, effective when communicating and thorough when researching.</p>
                    <p>I am currently looking for a new role as a developer. Hire me? </p>
                </div>
            </div>
            <div className={styles.rightSection}>
                <div className={styles.imageCard}>
                    <img src={aboutImage} alt="Me and my beloved cat sushi" />
                </div>
                <div className={styles.aboutButtonRow} >
                    <button className={styles.button}>Button 1</button>
                    <button className={styles.button}>Button 2</button>
                </div>
            </div>
        </div>
    );
};

export default About;
