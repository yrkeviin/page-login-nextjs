import "./profile.css"

export default function Profile() {
    return (
        <div className="container">
            <div className="container_profile">
                <div className="foto_perfil">
                    <img src="/kevinmotoperfil.png" alt="menino em cima de uma moto" />
                </div>

                <div className="nome">
                    <h1>Kevin Lima</h1>
                    <p>Estudante SESI e SENAI, gosto de desenvolver sites e novos desafios, sem ser isso, gosto bastante de sair com meus amigos! Se quiser me acompanhar, meu instagram está logo abaixo! 😉👦🏾</p>
                </div>

                <div className="redes_sociais">
                    <a href="https://www.instagram.com/kevin.iluminado/" target="_blank">
                        <img src="https://logos-world.net/wp-content/uploads/2020/04/Instagram-icon-Logo-2016-present.png" alt="instagram" />
                    </a>
                </div>

                <div className="habilidades">
                    <h2>Habilidades</h2>

                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>React</li>
                        <li>Next.js</li>
                    </ul>
                </div>

                <div className="experiencia">
                    <h2>Experiência</h2>

                    <ul>
                        <li>Estudante SESI e SENAI</li>
                        <li>Desenvolvedor Front-end</li>
                    </ul>
                </div>

                <div className="contato">
                    <h2>Contato</h2>
                    <p>+55 19 99353-3151</p>
                </div>

                <div className="voltar">
                    <a href="/">Voltar</a>
                </div>
            </div>
        </div>
    )
}