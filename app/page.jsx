import "./home.css"

export default function Home() {
    return (
        <div className="container">
            <div className="container_login">
                <div className="login">
                    <h1>login</h1>
                    <input type="text" placeholder="Nome de Usuário ou E-mail" />
                    <input type="password" placeholder="Senha"/>
                    <p><a href="/register">Não tem uma conta? Crie agora!</a></p>
                    <button><a href="/profile">Entrar</a></button>
                </div>
            </div>
        </div>
    )
}