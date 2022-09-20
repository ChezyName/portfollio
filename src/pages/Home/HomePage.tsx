import React from 'react'

import styles from "./Home.module.css";
import "./Home.css";

import Typewriter, { TypewriterClass } from "typewriter-effect";

const HomePage = () => {
  function typeWritterEffect(typewriter:TypewriterClass){
    typewriter
      .typeString("I'm A Developer") 
      .pauseFor(1250)
      .deleteAll()

      .typeString("I'm A Programmer")
      .pauseFor(1250)
      .deleteAll()

      .typeString("I'm A Game Developer")
      .pauseFor(1250)
      .deleteAll()

      .typeString("I'm A Software Engineer")
      .pauseFor(1250)
      .deleteAll()

      .typeString(import.meta.env.VITE_NAME)
      .pauseFor(5000)

      .start();
  }

  return (
    <div className={styles.main}>
      <Typewriter options={{loop: true}} onInit={typeWritterEffect}/>
    </div>
  )
}

export default HomePage