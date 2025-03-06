import styles from "../../styles/Register.module.css"
import Input from "../../components/Input"
import Button from "../../components/Button"

export default function Register() {
    return (
        <div className={styles.container}>
            <div className={styles.container_register}>
                <div className={styles.register}>
                    <h1>register</h1>
                    <Input text="Nome de Usuário" />
                    <Input text="E-mail" tipo="text" />
                    <Input text="Senha" tipo="password" />
                    <Input text="Confirme a senha" tipo="password" />
                    <p><a href="/">Já tem uma conta? Entre agora!</a></p>
                    <Button text="Registrar" />
                </div>
            </div>
        </div>
    )
}