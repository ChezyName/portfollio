import React, {useRef} from 'react'
import styles from "./loading.module.css";

const Loading = () => {
  return (
    <nav className={styles.loading}>
      <nav className={styles.top}></nav>
      <nav className={styles.bottom}></nav>
    </nav>
  )
}

export default Loading