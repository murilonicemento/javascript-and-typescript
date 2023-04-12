import React, { useState } from "react";
import { Container } from "../../styles/GlobalStyles";
import { Form } from "./styled";
import { toast } from "react-toastify";
import { isEmail } from "validator";
import { useDispatch, useSelector } from "react-redux";
import { get } from "lodash";
import * as actions from "../../store/modules/auth/actions";
import Loading from "../../components/Loading";

export default function Login(props) {
    const dispatch = useDispatch();
    const prevPath = get(props, "location.state.prevPath", "/")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const isLoading = useSelector(state => state.auth.isLoading);

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

        dispatch(actions.loginRequest({ email, password, prevPath }))
    }

    return (
        <Container>
            <Loading isLoading={isLoading} />

            <h1>Login</h1>
            <Form onSubmit={handleSubmit}>
                <input type="text" value={email} onChange={event => setEmail(event.target.value)} placeholder="Seu e-mail"></input>
                <input type="password" value={password} onChange={event => setPassword(event.target.value)} placeholder="Sua Senha"></input>
                <button type="submit">Acessar</button>
            </Form>
        </Container>
    )
}