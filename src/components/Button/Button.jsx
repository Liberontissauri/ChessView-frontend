import styles from "./style.module.css"

function Button(props) {
    let customStyles
    switch (props.size) {
        case "big": {
            customStyles = styles.big
        }
        case "medium": {
            customStyles = styles.medium
        }
        case "small": {
            customStyles = styles.small
        }
    }
    return (
        <div className={styles.background}>
            <button className={`${styles.button} 
            ${props.size == "big" ? customStyles = styles.big : ""} 
            ${props.size == "medium" ? customStyles = styles.medium : ""} 
            ${props.size == "small" ? customStyles = styles.small : ""}`}>{props.children}</button>
        </div>
    )
}

export default Button