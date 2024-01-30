import {useEffect} from 'react';
import styles from './About.module.css';
import aboutImage from '../assets/About_img.png'
import { annotate, annotationGroup } from 'rough-notation';


const About = () => {

    useEffect(() => {
        setTimeout(() => {
            const a1 = annotate(document.querySelector('#e1'), { type: 'highlight', color: '#FFADAD', multiline: 'true', iterations: 1 });
            const a2 = annotate(document.querySelector('#e2'), { type: 'highlight', color: '#FFD6A5', multiline: 'true', iterations: 1  });
            const a3 = annotate(document.querySelector('#e3'), { type: 'highlight', color: '#FDFFB6', multiline: 'true', iterations: 1  });
            const a4 = annotate(document.querySelector('#e4'), { type: 'highlight', color: '#E4F1EE', multiline: 'true', iterations: 1  });
            const a5 = annotate(document.querySelector('#e5'), { type: 'highlight', color: '#D9EDF8', multiline: 'true', iterations: 1  });
            const a6 = annotate(document.querySelector('#e6'), { type: 'highlight', color: '#DEDAF4', multiline: 'true', iterations: 1  });
            const a7 = annotate(document.querySelector('#e7'), { type: 'highlight', color: '#FFADAD', multiline: 'true', iterations: 1, padding: [4,4,4,4] });
            const a8 = annotate(document.querySelector('#e8'), { type: 'highlight', color: '#FFD6A5', multiline: 'true', iterations: 1, padding: [4,4,4,4] });
            const a9 = annotate(document.querySelector('#e9'), { type: 'highlight', color: '#FDFFB6', multiline: 'true', iterations: 1, padding: [4,4,4,4] });
            const a10 = annotate(document.querySelector('#e10'), { type: 'highlight', color: '#E4F1EE', multiline: 'true', iterations: 1  });
            const a11 = annotate(document.querySelector('#e11'), { type: 'highlight', color: '#D9EDF8', multiline: 'true', iterations: 1  });
            const a12 = annotate(document.querySelector('#e12'), { type: 'highlight', color: '#DEDAF4', multiline: 'true', iterations: 1  });
            const a13 = annotate(document.querySelector('#e13'), { type: 'circle', color: 'red', multiline: 'true', iterations: 1, padding: [9,9,9,9]  });

            const ag = annotationGroup([a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13]);

            const totalAnimationTime = 800 * 13; // 800ms per annotation times 13 annotations
            const delayBeforeHide = totalAnimationTime + 15000; // Total animation time plus 1 second

            const toggleAnnotations = () => {
                ag.show();

                setTimeout(() => {
                    ag.hide();

                    setTimeout(() => {
                        toggleAnnotations();
                    }, 1000);
                }, delayBeforeHide);
            };

            toggleAnnotations();
        }, 100); // Short delay before initializing annotations
    }, []);


    return (
        <div className={styles.aboutContainer}>
            <div className={styles.leftSection}>
                <div className={styles.aboutTitle}>
                    <h1>Hi! I'm Ben, a <span id="e1">Developer</span> from Florida.</h1>
                </div>
                <div className={styles.aboutBody}>
                    <p>I love building applications that are <span id="e2">scalable, impactful</span> and <span id="e3">creative.</span></p>
                    <p>I studied Computer Engineering at the University of Florida where I gained experience in <span id="e4">Web-development,</span> <span id="e5">Operating Systems,</span> <span id="e6">Cyber-security</span> and <span id="e7">IOT technology.</span> I spent 1 year working as the sole technical contributor to a <span id="e8">full-stack</span> application where I learned how to fulfil a project from <span id="e9">ideation to completion.</span> </p>
                    <p>In these experiences I’ve learned how to work independently and on small teams, both specialized and cross-functional. My work style emphasizes being <span id="e10">easy to approach,</span> <span id="e11">effective when communicating</span> and <span id="e12">thorough while researching.</span></p>
                    <p>I am currently looking for a new role as a developer. <span id="e13" className={styles.hireMe}>Hire me?</span> </p>
                </div>
            </div>
            <div className={styles.rightSection}>
                <div className={styles.imageCard}>
                    <img src={aboutImage} alt="Me and my beloved cat sushi" />
                </div>
                <div className={styles.aboutButtonRow}>
                    <a href="https://www.linkedin.com/in/ben-winans/" target="_blank" rel="noopener noreferrer">
                        <button className={styles.LinkedInButton}>LinkedIn</button>
                    </a>
                    <a href="https://github.com/Ben-Winans" target="_blank" rel="noopener noreferrer">
                        <button className={styles.GitHubButton}>GitHub</button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default About;
