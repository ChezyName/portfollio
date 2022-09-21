import React from 'react'
import styles from "./about.module.css";

import { env } from '../../ENV';

const Langs:any[] = env.VITE_LANGS;

const Language = () => {
    const Elements:any[] = [];
    const ElementsN:any[] = [];

    Langs.forEach(language => {
        let e = <span key={language}>{language}</span>
        if(!ElementsN.includes(language)){
            ElementsN.push(language);
            Elements.push(e);
        }
    });

  return (
        <div className={styles.carasoule}>
          <div className={styles.slideTrack}>
                {
                    Elements
                }
          </div>
          <div className={styles.slideTrack}>
                {
                    Elements
                }
          </div>
          <div className={styles.slideTrack}>
                {
                    Elements
                }
          </div>
      </div>
  )
}

export default Language