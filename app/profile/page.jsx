import styles from "../../styles/Profile.module.css"

export default function Profile() {
    return (
        <div className={styles.container}>
            <div className={styles.container_profile}>
                <div className={styles.foto_perfil}>
                    <img src="/kevinmotoperfil.png" alt="" />
                </div>
            </div>
        </div>
    )
}