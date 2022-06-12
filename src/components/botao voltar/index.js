import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const BackToPage = () => (
    <div className="area-botao">
    <Link className="back-toPage" to="/">Voltar</Link> 
    </div>
)
export  default BackToPage;