import styles from "../styles/Button.module.css"
import React from "react"

export default function Button({text}) {
    return (
        <div className={styles.login}>
            <a href="/profile"><button>{text}</button></a>
        </div>
    )
}