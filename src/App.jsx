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
      <div className={styles.About}>
        <About />
      </div>
      <div className={styles.Skills}>
        <Skills />
      </div>
      <div className={styles.Works}>
        <Works />
      </div>
      <div className={styles.Contact}>
        <Contact />
      </div>
    </>
  )
}

export default App;