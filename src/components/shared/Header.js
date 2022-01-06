import React from "react";
import "./header.scss";
import hero from "../../assets/hero.png";

const Header = ({ isLoggued, email, nickname }) => (
  <section className="satisfactionapp_header">
    {isLoggued && <p>Connecté en tant que {`${nickname}`} Déconnexion</p>}
    <img src={hero} alt="Représente les applications Ikodi" />
  </section>
);

export default Header;
