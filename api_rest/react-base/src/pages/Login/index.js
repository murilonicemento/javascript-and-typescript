import React from "react";
import { Container } from "../../styles/GlobalStyles";
import { Title, Paragrafo } from "./styled";

export default function Login() {
    return (
        <Container>
            <Title>
                <h1>
                    Login
                    <small>Oie</small>
                </h1>
            </Title>
            <Paragrafo>Lorem ipsum dolor</Paragrafo>
        </Container>
    )
}