import React, { useRef, useState } from 'react'
import styles from "./about.module.css";
import emailjs from '@emailjs/browser';
import { env } from '../../ENV';

import Input from './Input';

const EMAIL = "contact.chezyname@gmail.com";


function checkEmail(email:string){
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}

const Contact = () => {
    const [getName,setName] = useState("");
    const [getEmail,setEmail] = useState("");
    const [getMSG,setMSG] = useState("");

    const Form:any = useRef();
    const Name:any = useRef();
    const Email:any = useRef();
    const MSG:any = useRef();

    let canSend = true;

    function onError(type:string){
      console.log(type);
      if(type == "EMAIL"){
        //email error
        Email.current.classList.add(styles.error);
        Form.current.classList.add(styles.errorForm);
        canSend = false;
        setTimeout(() => {
          Email.current.classList.remove(styles.error); 
          Form.current.classList.remove(styles.errorForm);
          canSend = true;
        },500);
      }
      if(type == "NAME"){
        //NAME error
        Name.current.classList.add(styles.error);
        Form.current.classList.add(styles.errorForm);
        canSend = false;
        setTimeout(() => {
          Name.current.classList.remove(styles.error); 
          Form.current.classList.remove(styles.errorForm);
          canSend = true;
        },500);
      }
      if(type == "MSG"){
        //MSG error
        MSG.current.classList.add(styles.error);
        Form.current.classList.add(styles.errorForm);
        canSend = false;
        setTimeout(() => {
          MSG.current.classList.remove(styles.error); 
          Form.current.classList.remove(styles.errorForm);
          canSend = true;
        },500);
      }
    }

    function copyEmail(){
      navigator.clipboard.writeText(EMAIL);
    }

    function sendMessage(){
      if(!canSend) return;
      console.log("Sending Message!");
      let templateParams = {
        user_name: getName,
        user_email: getEmail,
        msg: getMSG,
      }

      let able = true;

      if(!checkEmail(getEmail)){
        onError("EMAIL");
        able = false;
      }
      if(getName == ""){
        onError("NAME");
        able = false;
      }
      if(getMSG == ""){
        onError("MSG");
        able = false;
      }

      if(!able) return;

      emailjs.send(env.VITE_EMAILJSSERVICEKEY, env.VITE_EMAILJSTEMPLATEID, templateParams, env.VITE_EMAILJSPUBLICKEY)
      .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        setName("");
        setEmail("");
        setMSG("");
      }, function(error) {
        console.log('FAILED...', error);
      });
    }

  return (
    <div className={styles.mainC}>
        <span className={styles.contact}>CONTACT</span>

        <div ref={Form} className={styles.contactForm}>
            <Input ref={Name} style={styles.inputM} value={getName} setInput={setName} placeholder={"NAME"}/>
            <Input ref={Email} style={styles.inputM} value={getEmail} setInput={setEmail} placeholder={"EMAIL"}/>
            <Input ref={MSG} isTextArea={true} style={styles.inputM} value={getMSG} setInput={setMSG} placeholder={"MESSAGE"}/>
        </div>

        <div onClick={copyEmail} className={styles.email}>COPY EMAIL</div>
        <div onClick={sendMessage} className={styles.send}>SEND</div>
    </div> 
  )
}

export default Contact