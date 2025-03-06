import styles from "../styles/Button.module.css"
import React from "react"

export default function Button({text}) {
    return (
        <div className={styles.login}>
            <button>{text}</button>
        </div>
    )
}