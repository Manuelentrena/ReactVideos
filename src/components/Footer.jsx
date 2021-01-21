import React from 'react';
import '../assets/styles/components/Footer.scss';

const labels = {
  TERMS: 'Terminos de uso',
  PRIVACY: 'Declaración de privacidad',
  HELP: 'Centro de ayuda',
}

const Footer = () => {

  const { TERMS, PRIVACY, HELP } = labels;

  return (
    <footer className="footer">
      <a href="/">{TERMS}</a>
      <a href="/">{PRIVACY}</a>
      <a href="/">{HELP}</a>
    </footer>
  )
};

export default Footer;
