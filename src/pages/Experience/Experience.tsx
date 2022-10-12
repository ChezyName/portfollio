import React, { useEffect } from 'react'
import Component, {LinkMode} from '../../components/GridComp/Component';
import styles from "./exp.module.css";

function createElement(title:string,children:any[],array:any[],middle:boolean = false){
    let a:any = <Component title={title.toUpperCase()} desc={children} isMiddle={middle ? styles.mid : styles.notMid}/>
    array.push(a);
}

const Experience = () => {
    const gridChildren:any[] = [];

    //Creating Grid Elements
    createElement("Unity : C#",[
        {desc: "All OLD Unity Games Are In MEGA Drive Here", link: "https://mega.nz/folder/U0p0AQ5J#C5KKyaISgtchKR97CsJ8ng"},
        "Started Unity 2019 With My First Game : KataHer0",
        "Largest Project Was FPS Project, A Multiplayer First Person Shooter",
        "Many Prototypes & Multiplayer Projects",

    ],gridChildren);

    createElement("WEB : JS & TS",[
        {desc:"My Portfollio Website Writting In React-TS [React + Typescript]", link:"https://github.com/ChezyName/portfollio"},
        {desc: "Harmoney - Electron Discord Clone", link: "https://github.com/ChezyName/Harmoney"},
        {desc: "DiscordOnline - A Test Project Sending Voice Data Over WebSockets Using Socket.IO", link: "https://github.com/ChezyName/DiscordOnline"},
        {desc: "FirebearsBot - A Discord Bot For My Robotics Team", link: "https://github.com/ChezyName/FirebearsBot"},
        {desc: "DevFourm - A Real Time Chatting App For A Startup In Creating Fourms : Made Using Firebase.", link: "https://chezyname.github.io/DevFourm/"},

        "BabylonJS - Same As ThreeJS But For Games",
        "ThreeJS - JS 3D Engine",

    ],gridChildren,true);
    
    createElement("Unreal Engine : C++",[
        {desc: "Hunt TaskForce, A Multiplayer Asymmetrical FPS Game Where A Monster Hunts Your Team", link:"https://github.com/ChezyName/HuntTaskforce"},
        "Currently Working On A Multiplayer FPS Game Where You're A Private Military With CO-OP Missions And Open World Gameplay.",
        "Prototyped A Multiplayer Fighting Game Currently W.I.P",
    ],gridChildren);

    createElement("Roblox Studio : Lua",[
        {desc: "Roblox Studio Was My First Game Development Platform. Most, If Not All Of The Programming Was Done By Me.", link: "https://www.roblox.com/users/151058724/profile#!/creations"},
        {desc: "Worked On A Fighting Game CODENAMED Swift Motion", link: "https://www.roblox.com/games/5578468516/Swift-Motion-BETA"},
        {desc: "Worked On A Game With My Friend Called Awakening", link: "https://www.roblox.com/games/5617784482/Awakening"},
        {desc: "Worked On A JoJo Fighting Game", link: "https://www.roblox.com/games/5675729999/Standless-Adventure"},
        {desc: "Worked On A Class Fighting Game",link: "https://www.roblox.com/games/5606750588/Block-Majik-III"},
        {desc: "Worked On A Prototype Game Called Train Combat", link:"https://www.roblox.com/games/5643742430/Train-Combat-v1-0"},
        "Worked On Many Other Projects, But Most Were Prototypes."
    ],gridChildren, true);

    /*
    createElement("Others : Java,C#,Lua",[
        {desc:"Real Time Messaging App With Code.org",link:"https://studio.code.org/projects/applab/IJ1Wk0PsXQqjvfRyX1mZC7kchYxjnOqB-jUvJVVvQ5U"},
        "Worked On MODS In Garrys Mod In Lua.",
        "Made Mods In Terraria In C#",
        "Worked On Robot Code For The FRC 2019-2023 Games In Java",
    ],gridChildren);
    */


    

    return (
        <div style={{width: "100%", height: "100%", display: "block", backgroundColor: "rgb(28, 41, 66)"}}>
            <div style={{width: "92%", height: "15%", display: "block", position: "relative", left: "6%", top: "0%", fontSize: "3rem", textAlign: "center", verticalAlign: "middle",lineHeight: "normal", userSelect: "none"}}><span style={{position: "relative",textAlign: "center",verticalAlign: "middle", top: "30%"}}>EXPERIENCE</span></div>
            <div className={styles.wrapper} style={{width: "92%", height: "80%", display:"grid", position: "relative", left: "6%", top: ".25%", columnGap: "4px", rowGap: "4px", gridTemplateColumns: "33% 33% 33%"}}>
            {
                gridChildren
            }
        </div>
        </div>
    )
}

export default Experience