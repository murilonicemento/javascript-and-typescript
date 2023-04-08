import React from "react";
import { FaHome, FaSign, FaSignInAlt, FaSignal, FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Nav } from "./styled";

export default function Header() {
    const botaoClicado = useSelector(state => state.botaoClicado)
    return (
        <Nav>
            <Link to="/">
                <FaHome size={24} />
            </Link>
            <Link to="/login">
                <FaUserAlt />
            </Link>
            <Link to="/exit">
                <FaSignInAlt />
            </Link>
            {botaoClicado ? "Clicado" : "Não clicado"}
        </Nav>
    );
}