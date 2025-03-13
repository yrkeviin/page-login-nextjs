import "./register.css"
import Input from "../../components/Input"
import Button from "../../components/Button"

export default function Register() {
    const router = useRouter();
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    return (
        <div className="container">
            <div className="container_register">
                <div className="register">
                    <h1>register</h1>
                    <Input text="Nome de Usuário" />
                    <Input id={password} text="E-mail" tipo="email" onChange={(e) => setPassword(e.target.value)} />
                    <Input text="Senha" tipo="password" value={input1} onChange={(e) => setInput1(e.target.value)}/>
                    <Input text="Confirme a senha" tipo="password" value="" />
                    <p><a href="/">Já tem uma conta? Entre agora!</a></p>
                    <Button text="Registrar" />
                </div>
            </div>
        </div>
    )
}