import React from 'react'

import { env } from '../../ENV';

import styles from "./Home.module.css";
import "./Home.css";

import Typewriter, { TypewriterClass } from "typewriter-effect";

// Links
const Email = "contact.chezyname@gmail.com";
const Resume = "https://docs.google.com/document/d/1m2h519o0-RNFL2aHFQDBJ5RvxMINOYcR/edit?usp=sharing&ouid=103805694668137435883&rtpof=true&sd=true";

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

      .typeString(env.VITE_NAME)
      .pauseFor(5000)

      .start();
  }

  function resumeType(typewriter:TypewriterClass){
    typewriter
      .typeString("Résumé") 
      .start();
  }

  function EmailType(typewriter:TypewriterClass){
    typewriter
      .typeString("Email") 
      .start();
  }

  return (
    <div className={styles.main}>
      <div className={styles.Name}> <Typewriter options={{loop: true}} onInit={typeWritterEffect}/> </div>
      <div className={styles.Resume} onClick={() => {window.open(Resume)}}> <Typewriter options={{loop: false}} onInit={resumeType}/> </div>
      <div className={styles.Email} onClick={() => {navigator.clipboard.writeText(Email)}}> <Typewriter options={{loop: false}} onInit={EmailType}/> </div>
    </div>
  )
}

export default HomePage