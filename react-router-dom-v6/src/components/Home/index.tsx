import React from "react";
import "./style.css";
import { useLocation } from "react-router-dom";

export const Home = () => {
  const location = useLocation();
  const { state } = location;
  return (
    <div>
      <h1>Home</h1>
      <p>{state}</p>
    </div>
  );
};
