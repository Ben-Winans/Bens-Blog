import styles from './Skills.module.css';

const Skills = () => {

    const resumePath = '/Bens-Blog/Ben_Winans_Resume_2024.pdf';

    return (
        <div className={styles.skillsContainer}>
            <div className={styles.skillsTitle}>Skills I've gained</div>
            <div className={styles.skillsContent}>
                <div className={styles.skillsColumn}>
                    <h3>Languages</h3>
                    <p>JavaScript (ES6)</p>
                    <p>HTML</p>
                    <p>CSS</p>
                    <p>C++</p>
                    <p>SQL</p>
                    <p>C</p>
                    <p>Java</p>
                    <p>Python</p>
                </div>
                <div className={styles.skillsColumn}>
                    <h3>Frameworks</h3>
                    <p>React</p>
                    <p>Node.js</p>
                    <p>Redux</p>
                    <p>Axios</p>
                    <p>styled-components</p>
                    <p>Sequelize</p>
                    <p>Jest</p>
                    <p>Express</p>
                    <p>Django</p>
                </div>
                <div className={styles.skillsColumn}>
                    <h3>Tools</h3>
                    <p>Bash</p>
                    <p>Git & Github</p>
                    <p>Chrome DevTools</p>
                    <p>Figma</p>
                    <p>VScode</p>
                    <p>Docker</p>
                    <p>CircleCi</p>
                    <p>VirtualBox</p>
                    <p>Assistive AI</p>
                </div>
                <div className={styles.skillsColumn}>
                    <h3>Other</h3>
                    <p>Command Line</p>
                    <p>Linux</p>
                    <p>Windows</p>
                    <p>AWS</p>
                    <p>UI/UX</p>
                    <p>OWASP</p>
                    <p>Data Structures</p>
                </div>
            </div>
            <div className={styles.resumeButtonContainer}>
                <a href={resumePath} download="Ben_Winans_Resume_2024.pdf" className={styles.resumeButton}>
                    Get a copy of my resume
                </a>
            </div>
        </div>
    );
};

export default Skills;
