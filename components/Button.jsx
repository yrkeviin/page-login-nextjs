import styles from "../styles/Button.module.css"

export default function Button({text}) {
    return (
        <div className={styles.login}>
            <a href="/profile"><button>{text}</button></a>
        </div>
    )
}