"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // Importa o useRouter para redirecionamento

import "./register.css";

export default function Register() {
    const [input1, setInput1] = useState("");
    const [input2, setInput2] = useState("");
    const [match, setMatch] = useState(null);
    const [error, setError] = useState(null);

    const router = useRouter(); // Inicializa o useRouter

    const handleCheck = () => {
        if (input1 !== input2) {
            setMatch(false);
            setError("As senhas não conferem");
        } else if (input1.length < 6) {
            setMatch(false);
            setError("A senha deve ter no mínimo 6 caracteres");
        } else if (input1.length === 0) {
            setMatch(false);
            setError("Preencha o input 1");
        } else if (input2.length === 0) {
            setMatch(false);
            setError("Preencha o input 2");
        } else {
            setMatch(true);
            setError("Sucesso");
            router.push("/profile"); // Redireciona para a página profile
        }
    };

    return (
        <div className="container">
            <div className="container_register">
                <div className="register">
                    <h1>register</h1>
                    <input
                        type="email"
                        placeholder="E-mail"
                    />
                    <input
                        type="text"
                        placeholder="Nome de Usuário"
                    />
                    <input
                        type="password"
                        placeholder="Digite a senha"
                        value={input1}
                        onChange={(e) => setInput1(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Repita a senha"
                        value={input2}
                        onChange={(e) => setInput2(e.target.value)}
                    />
                    <p><a href="/">Já tem uma conta? Entre agora!</a></p>
                    <button onClick={handleCheck}>Registrar</button>
                    {match !== null && <p>{error}</p>}
                </div>
            </div>
        </div>
    );
}