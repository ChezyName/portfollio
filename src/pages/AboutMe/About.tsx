import React, { useEffect, useState } from 'react'
import styles from "./about.module.css";

// @ts-ignore
import ScaleText from "react-scale-text";
import Language from './Language';

/* MY ABOUT ME & LIFE & SKILLS GOES HERE */
function getAgeFromDate(dateString:string) {
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
  }
  return age;
}

//get year difference between date X and year
function getYearDiff(date1:Date) {
  return Math.abs(new Date().getFullYear() - date1.getFullYear());
}

const About = () => {
  const [getAge,setAge] = useState(0);
  const [getDays,setDays] = useState(0);

  var year = new Date().getFullYear();
  var end:any = new Date('09/04/' + (year+1));
  var _second = 1000;
  var _minute = _second * 60;
  var _hour = _minute * 60;
  var _day = _hour * 24;
  var timer:any;

  function showRemaining() {
      var now:any = new Date();
      var distance = end - now;
      var days = Math.floor(distance / _day);
      var hours = Math.floor((distance % _day) / _hour);
      var minutes = Math.floor((distance % _hour) / _minute);
      var seconds = Math.floor((distance % _minute) / _second);

      setDays(days);
  }

  function makeAge(){
    setAge(getAgeFromDate("09/04/2004"));
    if(getAge == undefined || getAge == null){
      makeAge();
    }
  }

  useEffect(() => {
    makeAge();
    setInterval(showRemaining,30000);
  });

  return (
    <div className={styles.main}>
        <span className={styles.aboutMeT}>ABOUT ME</span>
        <div className={styles.mainT}>
          Im currently {getYearDiff(new Date(2004,0))} years old, and will be turning {getYearDiff(new Date(2003,0))} Soon.
          Im a hardworking, career centric person who loves to mess around with different technologies.
          I love Javascript/Typescript, and have been using them for {getYearDiff(new Date(2020,0))} years.
          I've also been using C++ for {getYearDiff(new Date(2021,0))} years, aswell as Java for {getYearDiff(new Date(2017,0))} years.
          I've used Unity and Unreal Engine many times, and love learning new things. I've been a programmer for {getYearDiff(new Date(2017,0))} years
          and have been a learner for ∞ years. For anyone trying to learn how to program thinking they dont know better, as a fellow
          developer, use Google, it will be your best friend and have fun learning. <span className={styles.JOAT} style={{fontStyle: "italic"}}>Javascript</span> is 
          probably the best to start learning, becuase unlike <span style={{fontStyle: "italic"}}>Python</span> it has semicollins (;). Thats it.
        </div>
        <Language />
    </div>
  )
}

export default About