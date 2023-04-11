import React, { useState } from "react";
import { Container } from "../../styles/GlobalStyles";
import { Form } from "./styled";
import { toast } from "react-toastify";
import { isEmail } from "validator";
import { useDispatch } from "react-redux";
import * as actions from "../../store/modules/auth/actions"


export default function Login() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        let formErrors = false;

        if (!isEmail(email)) {
            formErrors = true;
            toast.error("E-mail inválido");
        }
        if (password.length < 6 || password.length > 50) {
            formErrors = true;
            toast.error("Senha inválida");
        }

        if (formErrors) return;

        dispatch(actions.loginRequest({ email, password }))
    }

    return (
        <Container>
            <h1>Login</h1>
            <Form onSubmit={handleSubmit}>
                <input type="text" value={email} onChange={event => setEmail(event.target.value)} placeholder="Seu e-mail"></input>
                <input type="password" value={password} onChange={event => setPassword(event.target.value)} placeholder="Sua Senha"></input>

                <button type="submit">Acessar</button>
            </Form>
        </Container>
    )
}