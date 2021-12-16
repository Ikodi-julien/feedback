import React from "react";
import './header.scss';
import hero from '../../assets/hero.png';

const Header = () => (
  <section className="satisfactionapp_header">
    <img src={hero} alt="Représente les applications Ikodi"/>
  </section>
)

export default Header;