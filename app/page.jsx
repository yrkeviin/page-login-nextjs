import styles from "../styles/Home.module.css"
import Input from "../components/Input"
import Button from "../components/Button"

export default function Home() {
    return (
        <div className={styles.container}>
            <div className={styles.container_login}>
                <div className={styles.login}>
                    <h1>login</h1>
                    <Input text="E-mail ou Nome de Usuário" tipo="text" />
                    <Input text="Senha" tipo="password" />
                    <p><a href="/register">Não tem uma conta? Crie agora!</a></p>
                    <Button text="Entrar" />
                </div>
            </div>
        </div>
    )
}