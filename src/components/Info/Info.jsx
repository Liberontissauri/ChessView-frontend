import React from 'react'
import styles from "./style.module.css"
import Snippet_Paragraph from "../Snippet_Paragraph/Snippet_Paragraph.jsx"

function Info() {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <h2 className={styles.subTitle}>Basic Usage</h2>
        <div className={styles.snippet_container}>
          <p className={styles.snippet_text}>https://thiswebsite.com/boards/?
            <span className={styles.snippet_text + " red_highlight"}>FEN=■</span>&
            <span className={styles.snippet_text + " green_highlight"}>size=■</span>&
            <span className={styles.snippet_text + " blue_highlight"}>dark=■</span>&
            <span className={styles.snippet_text + " yellow_highlight"}>light=■</span>
          </p>
        </div>

        <Snippet_Paragraph
        title="FEN"
        text="The API uses the FEN standard to transmit data, to send the request you only need the section that describes the board, “rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR”, the API will cut off the rest of  the standard notation."
        color="#C48989"></Snippet_Paragraph>
        <Snippet_Paragraph
        title="Size"
        text="Defines the width and height of the generated board, bigger images get severely slower to process, so images are capped to 800px in size."
        color="#91C589"></Snippet_Paragraph>
        <Snippet_Paragraph
        title="Dark"
        text="Color of the dark squares, do not include the “#” or the color won’t be accepted by the API."
        color="#898FC5"></Snippet_Paragraph>
        <Snippet_Paragraph
        title="Light"
        text="Color of the light squares, do not include the “#” or the color won’t be accepted by the API."
        color="#DBC96D"></Snippet_Paragraph>
        
      </div>
    </div>
  )
}

export default Info