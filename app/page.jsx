import styles from "../styles/Home.module.css"
import Input from "../components/Input"

export default function Home() {
    return (
        <div className={styles.container}>
            <div className={styles.image}>
                <img src="../public/wp.png" alt="" />
            </div>

            <div className={styles.container_login}>
                <div className={styles.login}>
                    <h1>login</h1>
                    <Input />
                    <button>Entrar</button>
                </div>
            </div>
        </div>
    )
}