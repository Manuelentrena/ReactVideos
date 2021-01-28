import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import gravatar from "../utils/gravatar";
import { logoutRequest } from "../actions";
import "../assets/styles/components/Header.scss";
import logo from "../assets/static/logo-platzi-video-BW2.png";
import userIcon from "../assets/static/user-icon.png";

const labels = {
  PROFILE: "Perfil",
  SESION_CLOSE: "Cerrar Sesión",
  SESION_OPEN: "Iniciar Sesión",
};

const Header = (props) => {
  const { PROFILE, SESION_CLOSE, SESION_OPEN } = labels;
  const { user, isLogin, isRegister } = props;
  const hasUser = Object.keys(user).length > 0;

  const handleLogout = () => {
    props.logoutRequest({});
  };

  return (
    <header className="header">
      <Link to="/">
        <img className="header__img" src={logo} alt="Platzi Video" />
      </Link>

      <div className="header__menu">
        <div className="header__menu--profile">
          <img
            src={hasUser > 0 ? gravatar(user.email) : userIcon}
            alt={user.email}
          />
          <p>{PROFILE}</p>
        </div>
        <ul>
          {hasUser ? (
            <li>
              <Link to="/">{user.name}</Link>
            </li>
          ) : null}

          {hasUser ? (
            <li>
              <Link to="#logout" onClick={handleLogout}>
                {SESION_CLOSE}
              </Link>
            </li>
          ) : (
            <li>
              <Link to="/login">{SESION_OPEN}</Link>
            </li>
          )}
        </ul>
      </div>
    </header>
  );
};

Header.propTypes = {
  user: PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  logoutRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
