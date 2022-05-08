import styles from "./style.module.css"
import Button from "../Button/Button.jsx";

function Hero() {

  return (
    <div className={styles.background}>
      <div className={`${styles.container} fade-in-left`}>
        <img src="/knight.png" className={styles.knightIcon}></img>
        <h1 className={styles.title}>Chess API</h1>
        <h2 className={styles.subtitle}>Generate chess board images with ease</h2>
        <Button size="big">How to Use</Button>
      </div>
    </div>
  )
}

export default Hero