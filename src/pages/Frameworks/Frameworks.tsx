import React, { useEffect, useState, Suspense } from 'react'
import styles from "./Frameworks.module.css"

import { env } from '../../ENV';

const FrameworkChild = React.lazy(() => import('./FrameworkChild'));
const FrameworkKey = React.lazy(() => import('./FrameworkKey'));
const FrameworkPie = React.lazy(() => import('./FrameworkPie'));

type repo = {
    name: string,
    link: string,
    lang: string,
    desc: string,
}

const Lang2Color:any = {
    "Rust" : "#ff5349",
    "JavaScript" : "#ffff00",
    "TypeScript" : "#007acc",
    "C++" : "#0051ff",
    "C#" : "#ff00aa",
}

const Frameworks = () => {
    const [githubRepos,setRepo] = useState(new Array());
    let langPieData: any[] = [];
    let key:any[] = [];

    function getGithubRepos(){
        fetch(env.VITE_GITHUBAPI)
        .then((response) => response.json())
        .then((data) => {
            data.forEach((e: any) => {
                if(e.owner.login == env.VITE_GITHUBNAME && e.name != env.VITE_GITHUBNAME){
                    const newData:repo = {
                        name: e.name,
                        link: e.html_url,
                        lang: e.language,
                        desc: e.description,
                    }
                    if(!githubRepos.includes(newData)) githubRepos.push(newData);
                }
            });
    
            githubRepos.forEach((repo) => {
                let lang = repo.lang;
                let update = false;
                for(var i = 0; i < langPieData.length; i++){
                    let cTitle = langPieData[i].title;
                    //console.log("Compairing: " + cTitle + " TO " + lang);
                    if(cTitle == lang){
                        let v = langPieData[i].value += 1;
                        langPieData[i] = { title: lang, value: v, color: Lang2Color[lang]}
                        update = true;
                    }
                }
    
                if(!update){
                    langPieData.push({ title: lang, value: 1, color: Lang2Color[lang]});
                }
            });
    
            langPieData.forEach((data) => {
                key.push({title: data.title, color: Lang2Color[data.title]});
            });
    
            console.log("Loaded: " + githubRepos);
            if(githubRepos == null || githubRepos.length == 0) getGithubRepos();
        });
    }

    useEffect(() => {
        getGithubRepos();
    })
    

    return (
        <div className={styles.main}>
            <div className={styles.reposH}>
                <span className={styles.repoT}>Current PUBLIC Github Repos:</span>
                <Suspense>
                    {githubRepos && <FrameworkChild style={styles.repoE} items={githubRepos}/>}
                </Suspense>
            </div>
            <div className={styles.MUL}>MY MOST USED LANGUAGES</div>
            <div className={styles.pieM}>
                <Suspense>
                    <FrameworkPie data={langPieData}/>
                </Suspense>
            </div>
            <div className={styles.pieK}>
                <Suspense>
                    <FrameworkKey langs={key} style={styles.KEY} />
                </Suspense>
            </div>
        </div>
    )
}

export default Frameworks