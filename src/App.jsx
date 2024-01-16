import React from 'react';
import NavBar from "./components/NavBar";
import About from "./components/About";
import Skills from "./components/Skills";
import Works from "./components/Works";
import styles from './App.module.css'; 


function App() {
  return (
    <>
      <NavBar />
      <div className={styles.section}>
        <About />
      </div>
      <div className={styles.section}>
        <Skills />
      </div>
      <div className={styles.section}>
        <Works />
      </div>
    </>
  )
}

export default App;