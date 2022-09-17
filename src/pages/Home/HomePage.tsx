import React from 'react'

import styles from "./Home.module.css";
import "./Home.css";

import Typewriter, { TypewriterClass } from "typewriter-effect";

const HomePage = () => {
  function typeWritterEffect(typewriter:TypewriterClass){
    typewriter
      .typeString("Im A Developer.") 
      .pauseFor(1250)
      .deleteAll()

      .typeString("I Make Projects,")
      .pauseFor(1250)
      .deleteAll()

      .typeString("C++")
      .pauseFor(250)
      .deleteAll()
      .typeString("C#")
      .pauseFor(250)
      .deleteAll()
      .typeString("Javascript & Typescript")
      .pauseFor(250)
      .deleteAll()

      .typeString("I'm CHΞZY.")
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