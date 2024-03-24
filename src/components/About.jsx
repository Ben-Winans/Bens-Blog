import styles from './About.module.css';
import aboutImage from '../assets/About_img.png'


const About = () => {

    return (
        <div className={styles.aboutContainer}>
            <div className={styles.leftSection}>
                <div className={styles.aboutTitle}>
                    <h1>Hi! I'm Ben, a Computer Guy.</h1>
                </div>
                <div className={styles.aboutBody}>
                    <p>
                        I like the sound of servers and getting engrossed in manuals. 
                    </p>
                    <p>
                        I studied Computer Engineering at the University of Florida where I gained
                        experience in the fundamentals of technology with hardware and software concepts. 
                    </p>
                    <p>
                        I’ve learned how to work independently and on small teams, 
                        both specialized and cross-functional. My work style emphasizes being easy to 
                        approach, effective when communicating and thorough while researching.
                    </p>
                    <p>
                        I'm looking for a new role, are you hiring? 
                        <span> 
                            <a href="#contact"> <b> Let's Chat</b></a> 
                        </span> 
                    </p>

                </div>
            </div>
            <div className={styles.rightSection}>
                {/* <div className={styles.imageCard}>
                    <img src={aboutImage} alt="Me and my beloved cat sushi" />
                </div> */}
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
