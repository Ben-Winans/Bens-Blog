import React from 'react';
import NavBar from "./components/NavBar";
import About from "./components/About";
import Skills from "./components/Skills";
import Works from "./components/Works";
import Contact from "./components/Contact";
import styles from './App.module.css'; 


function App() {
  return (
    <>
      <NavBar />
      <div id="about" className={styles.About}>
        <About />
      </div>
      <div id="skills" className={styles.Skills}>
        <Skills />
      </div>
      <div id="projects" className={styles.Works}>
        <Works />
      </div>
      <div id="contact" className={styles.Contact}>
        <Contact />
      </div>
    </>
  )
}

export default App;