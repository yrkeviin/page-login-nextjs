"use client";

import "./home.css"
import Input from "../components/Input"
import Button from "../components/Button"
import { useState } from "react"

export default function Home() {
    return (
        <div className="container">
            <div className="container_login">
                <div className="login">
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