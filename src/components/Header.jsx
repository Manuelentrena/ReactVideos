import React from 'react';
import '../assets/styles/components/Header.scss';

const labels = {
  PROFILE: 'Perfil',
  ACCOUNT: 'Cuenta',
  SESION: 'Cerrar Sesión',
}

const Header = () => {

  const { PROFILE, ACCOUNT, SESION } = labels;
  
  return (

    <header className="header">
      <img className="header__img" src="../assets/logo-platzi-video-BW2.png" alt="Platzi Video"/>
      <div className="header__menu">
        <div className="header__menu--profile">
          <img src="../assets/user-icon.png" alt=""/>
          <p>{PROFILE}</p>
        </div>
        <ul>
          <li><a href="/">{ACCOUNT}</a></li>
          <li><a href="/">{SESION}</a></li>
        </ul>
      </div>
    </header>
  ) 
};

export default Header;