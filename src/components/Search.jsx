import React from 'react';
import '../assets/styles/components/Search.scss';

const labels = {
  TITLE: '¿Qué quieres ver hoy?',
  PLACEHOLDER: 'Buscar...',
}

const Search = () => {

  const { TITLE, PLACEHOLDER } = labels;

  return (
    <section className="main">
      <h2 className="main__title">{TITLE}</h2>
      <input type="text" className="input" placeholder={PLACEHOLDER}/>
    </section>
  )
};

export default Search;
