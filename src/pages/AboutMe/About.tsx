import React from 'react'
import styles from "./about.module.css";

import Language from './Language';

/* MY ABOUT ME & LIFE & SKILLS GOES HERE */

const About = () => {
  return (
    <div className={styles.main}>
        <span className={styles.aboutMeT}>ABOUT ME</span>
        <Language />
    </div>
  )
}

export default About