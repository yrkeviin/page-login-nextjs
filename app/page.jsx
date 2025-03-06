import styles from "../styles/Home.module.css"
import styles from "../styles/Input.module.css"

export default function Home() {
    return (
        <div className={styles.container}>
            <div className={styles.image}>
                <img src="../public/wp.png" alt="" />
            </div>

            <div className={styles.container_login}>
                <div className={styles.login}>
                    <h1>login</h1>
                    <input type="text" />
                    <input type="text" />
                    <button></button>
                </div>
            </div>
        </div>
    )
}