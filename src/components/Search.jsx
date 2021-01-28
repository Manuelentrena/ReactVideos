import React from "react";
import classNames from "classnames";
import "../assets/styles/components/Search.scss";

const labels = {
  TITLE: "¿Qué quieres ver hoy?",
  PLACEHOLDER: "Buscar...",
};

const Search = ({ isHome }) => {
  const { TITLE, PLACEHOLDER } = labels;
  const inputStyle = classNames("input", {
    isHome,
  });

  return (
    <section className="main">
      <h2 className="main__title">{TITLE}</h2>
      <input type="text" className={inputStyle} placeholder={PLACEHOLDER} />
    </section>
  );
};

export default Search;
