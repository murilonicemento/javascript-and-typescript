import React, { useEffect, useState } from "react";
import { Container } from "../../styles/GlobalStyles";
import { get } from "lodash";
import { Form } from "./styled";
import { isEmail, isInt, isFloat } from "validator";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import Loading from "../../components/Loading";
import axios from "../../services/axios";
import history from "../../services/history";
import * as actions from "../../store/modules/auth/actions";


export default function Aluno({ match }) {
    const dispatch = useDispatch();
    const id = get(match, "params.id", 0);
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [email, setEmail] = useState("");
    const [idade, setIdade] = useState("");
    const [peso, setPeso] = useState("");
    const [altura, setAltura] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (!id) return;
        async function getData() {
            try {
                setIsLoading(true);
                const { data } = await axios.get(`/alunos/${id}`);
                const Foto = get(data, "Fotos[0].url", "");

                setNome(data.nome);
                setSobrenome(data.sobrenome);
                setIdade(data.idade);
                setPeso(data.peso);
                setAltura(data.altura);

                setIsLoading(false);
            } catch (e) {
                setIsLoading(false);

                const status = get(e, "response.status", 0);
                const errors = get(e, "response.data.errors", []);

                if (status === 400) errors.map(error => toast.error(errors))

                history.push("/")
            }
        }
        getData();
    }, [id])

    const handleSubmit = async (event) => {
        event.preventDefault();
        let formErrors = false;

        if (nome.length < 3 || nome.length > 255) {
            formErrors = true;
            toast.error("Nome dever ter entre 3 e 255 caracteres");
        }
        if (sobrenome.length < 3 || sobrenome.length > 255) {
            formErrors = true;
            toast.error("Sobrenome dever ter entre 3 e 255 caracteres");
        }
        if (!isEmail(email)) {
            formErrors = true;
            toast.error("E-mail inválido")
        }
        if (!isInt(String(idade))) {
            formErrors = true;
            toast.error("Idade inválida")
        }
        if (!isFloat(String(peso))) {
            formErrors = true;
            toast.error("Peso inválido")
        }
        if (!isFloat(String(altura))) {
            formErrors = true;
            toast.error("Altura inválida")
        }

        if (formErrors) return;

        try {
            setIsLoading(true);
            if (id) {
                await axios.put(`/alunos/${id}`, { nome, sobrenome, email, idade, peso, altura })
                toast.success("Aluno(a) editado(a) com sucesso!")
            } else {
                const { data } = await axios.post(`/alunos/`, { nome, sobrenome, email, idade, peso, altura })
                toast.success("Aluno(a) criado(a) com sucesso!")
                history.push(`/aluno/${data.id}/edit`)
            }
            setIsLoading(false);
        } catch (e) {
            const status = get(e, "response.status", 0);
            const data = get(e, "response.data", {});
            const errors = get(data, "errors", []);

            if (errors.length > 0) {
                errors.map(error => toast.error(error))
            } else {
                toast.error("Erro desconhecido")
            }

            if (status === 401) dispatch(actions.loginFailure())
        }
    }

    return (
        <Container>
            <Loading isLoading={isLoading} />
            <h1>{id ? "Editar Aluno" : "Novo Aluno"}</h1>
            <Form onSubmit={handleSubmit}>
                <input type="text" value={nome} onChange={event => setNome(event.target.value)} placeholder="Nome"></input>
                <input type="text" value={sobrenome} onChange={event => setSobrenome(event.target.value)} placeholder="Sobrenome"></input>
                <input type="text" value={email} onChange={event => setEmail(event.target.value)} placeholder="Email"></input>
                <input type="text" value={idade} onChange={event => setIdade(event.target.value)} placeholder="Idade"></input>
                <input type="number" value={peso} onChange={event => setPeso(event.target.value)} placeholder="Peso"></input>
                <input type="number" value={altura} onChange={event => setAltura(event.target.value)} placeholder="Altura"></input>
                <button type="submit">Enviar</button>
            </Form>
        </Container>
    )
}

Aluno.propTypes = {
    match: PropTypes.shape({}).isRequired
}