import React from "react";
import { useDispatch } from "react-redux";
import { Container } from "../../styles/GlobalStyles";
import { Title, Paragrafo } from "./styled";
import * as exampleActions from "../../store/modules/example/actions";

export default function Login() {
    const dispatch = useDispatch();

    function handleClick(event) {
        event.preventDefault();

        dispatch(exampleActions.clicaBotao());
    }

    return (
        <Container>
            <Title>
                Login
                <small>Oie</small>
            </Title>
            <Paragrafo>Lorem ipsum dolor</Paragrafo>
            <button type="button" onClick={handleClick}>
                Enviar
            </button>
        </Container>
    )
}