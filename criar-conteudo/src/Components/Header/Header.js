import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import img from "./logo.png";

const Header = () => {
  return (
    <div className={styles.header}>
       <nav className="container"></nav>
      <Link to="/clientes">
        <img src={img} alt="foto de um calendario" />
      </Link>
      <nav className="container">
        <h1 >Organizador de Conteúdo</h1>
      </nav>
    </div>
  );
};

export default Header;
