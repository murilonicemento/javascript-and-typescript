import React, { useState } from "react";
import { toast } from "react-toastify";
import { isEmail } from "validator";
import axios from "../../services/axios";
import history from "../../services/history";
import { get } from "lodash";
import { Container } from "../../styles/GlobalStyles";
import { Form } from "./styled";


export default function Register() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleSubmit(event) {
        event.preventDefault();

        let formErrors = false;

        if (nome.length < 3 || nome.length > 255) {
            formErrors = true;
            toast.error("Nome deve ter entre 3 e 255 caracteres");
        }
        if (!isEmail(email)) {
            formErrors = true;
            toast.error("E-mail inválido");
        }
        if (password.length < 6 || password.length > 50) {
            formErrors = true;
            toast.error("Senha deve ter entre 5 e 50 caracteres");
        }

        if (formErrors) return;

        try {
            await axios.post("/users/", {
                nome, password, email
            });

            toast.success("Cadastro realizado com sucesso");
            history.push("/login")
        } catch (error) {
            const errors = get(error, "response.data.errors", []);

            errors.map(error => toast.error(error))
        }

    }

    return (
        <Container>
            <h1>Crie sua conta</h1>
            <Form onSubmit={handleSubmit}>
                <label htmlFor="nome">
                    Nome:
                    <input type="text" value={nome} onChange={event => setNome(event.target.value)} placeholder="Seu Nome"></input>
                </label>
                <label htmlFor="email">
                    E-mail:
                    <input type="email" value={email} onChange={event => setEmail(event.target.value)} placeholder="Seu E-mail"></input>
                </label>
                <label htmlFor="password">
                    Senha:
                    <input type="password" value={password} onChange={event => setPassword(event.target.value)} placeholder="Sua Senha"></input>
                </label>

                <button type="submit">Criar minha conta</button>
            </Form>
        </Container>
    )
}