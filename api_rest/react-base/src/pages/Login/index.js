import React from "react";
import { Container } from "../../styles/GlobalStyles";
import axios from "../../services/axios";
import { Title, Paragrafo } from "./styled";

export default function Login() {
    React.useEffect(() => {
        async function getData() {
            const response = await axios.get("/alunos");
            const { data } = response;
            console.log(data);
        }
        getData();
    }, []);
    return (
        <Container>
            <Title>
                Login
                <small>Oie</small>
            </Title>
            <Paragrafo>Lorem ipsum dolor</Paragrafo>
            <button type="button">
                Enviar
            </button>
        </Container>
    )
}