import styles from "../styles/Input.module.css"

export default function Input() {
    return (
        <div className={styles.login}>
            <input placeholder="E-mail ou Nome de Usuário" type="text" />
            <input placeholder="Senha" type="password" />
        </div>
    )
}