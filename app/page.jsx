import styles from "../styles/Home.module.css"
import Input from "../components/Input"
import Button from "../components/Button"

export default function Home() {
    return (
        <div className={styles.container}>
            <div className={styles.container_login}>
                <div className={styles.login}>
                    <h1>login</h1>
                    <Input />
                    <p><a href="">Não tem uma conta? Crie agora!</a></p>
                    <Button />
                </div>
            </div>
        </div>
    )
}