import styles from "../styles/Input.module.css"

export default function Input({text, tipo}) {
    return (
        <div className={styles.login}>
            <input placeholder={text} type={tipo} />
        </div>
    )
}