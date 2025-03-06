import styles from "../../styles/Register.module.css"
import styles from "../../styles/Home.module.css"
import Input from "../../components/Input"
import Button from "../../components/Button"

export default function Register() {
    return (
        <div className={styles.container}>
            <div className={styles.register}>
                <div className={styles.register}>
                    <h1>login</h1>
                    <Input />
                    <Input />
                    <p><a href="/app">Não tem uma conta? Crie agora!</a></p>
                    <Button />
                </div>
            </div>
        </div>
    )
}