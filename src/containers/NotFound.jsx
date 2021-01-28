import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import "../assets/styles/components/NotFound.scss";

const NotFound = () => {
  return (
    <>
      <div id="clouds">
        <div className="cloud x1"></div>
        <div className="cloud x1_5"></div>
        <div className="cloud x2"></div>
        <div className="cloud x3"></div>
        <div className="cloud x4"></div>
        <div className="cloud x5"></div>
      </div>
      <div className="c">
        <div className="_404">404</div>
        <hr />
        <div className="_1">ERROR</div>
        <div className="_2">Página no encontrada</div>
        <Link className="btn" to="/">
          VOLVER AL INICIO
        </Link>
      </div>
    </>
  );
};

export default NotFound;
