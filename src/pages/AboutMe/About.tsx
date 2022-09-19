import React, { useEffect, useState } from 'react'
import styles from "./about.module.css";

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

        <Language />

        {/*
        <div className={styles.BD}>
          <span>IM {getAge} YEARS OLD</span>
          <span>YOU CAN WISH ME HAPPY BIRTHDAY IN</span>
          <span>{getDays} MORE DAYS!</span>
        </div>
        */}

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