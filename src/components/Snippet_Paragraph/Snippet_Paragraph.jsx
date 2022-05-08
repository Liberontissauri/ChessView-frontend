import React from 'react'
import styles from "./style.module.css"

function Snippet_Paragraph(props) {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}
        style={{color: props.color}}>{props.title}</h3>
      <p className={styles.text}
        style={{color: props.color}}>{props.text}</p>
    </div>
  )
}

export default Snippet_Paragraph