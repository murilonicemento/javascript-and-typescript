import React, { useState } from "react";
import { toast } from "react-toastify";
import { isEmail } from "validator";
import { useSelector, useDispatch } from "react-redux";
import { Container } from "../../styles/GlobalStyles";
import { Form } from "./styled";
import axios from "../../services/axios";
import history from "../../services/history";
import Loading from "../../components/Loading";
import * as actions from "../../store/modules/auth/actions";


export default function Register() {
    const dispatch = useDispatch()
    const id = useSelector(state => state.auth.user.id)
    const nomeStored = useSelector(state => state.auth.user.nome)
    const emailStored = useSelector(state => state.auth.user.email)
    const isLoading = useSelector(state => state.auth.isLoading)
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    React.useEffect(() => {
        if (!id) return;

        setNome(nomeStored)
        setEmail(emailStored)
    }, [emailStored, id, nomeStored])

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
        if (!id && (password.length < 6 || password.length > 50)) {
            formErrors = true;
            toast.error("Senha deve ter entre 5 e 50 caracteres");
        }

        if (formErrors) return;

        dispatch(actions.registerRequest({ nome, email, password, id }))

    }

    return (
        <Container>
            <Loading isLoading={isLoading} />

            <h1>{id ? "Editar dados" : "Crie sua Conta"}</h1>
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

                <button type="submit">{id ? "Salvar" : "Criar Conta"}</button>
            </Form>
        </Container>
    )
}