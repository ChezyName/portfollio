import React from 'react'
import styles from "./about.module.css";

import Language from './Language';

/* MY ABOUT ME & LIFE & SKILLS GOES HERE */

const About = () => {
  return (
    <div className={styles.main}>
        <span className={styles.aboutMeT}>ABOUT ME</span>
        <Language />
        <div className={styles.info}>
          <h1>A LITTLE BIT ABOUT ME</h1>
          <div className={styles.infoH}>
            <a>I'd call myself a </a><a className={styles.JOAT}>Jack Of All Trades</a>
            <a>, One who can learn any language given time as
               most if not all the skills are cross-compatible.
               I spend most of my time working on projects either for
               personaly or others. I've used Unreal Engine 4 & 5 for small games
               and Unity aswell. My goal is to be able to learn as much as I can.
            </a>
          </div>
        </div>
    </div>
  )
}

export default About