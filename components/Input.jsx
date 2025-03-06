import styles from "../styles/Input.module.css"

export default function Input() {
    return (
        <div className={styles.login}>
            <input type="text" />
            <input type="text" />
        </div>
    )
}