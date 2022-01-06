import React from "react";
import { useLocation } from "react-router-dom";
import UserData from "./UserData";
import "./header.scss";
import hero from "../../assets/hero.png";

const Header = ({ isLoggued, nickname, setIsLoggued }) => {
  const pathname = useLocation().pathname;

  return (
    <header className="satisfactionapp_header">
      {pathname !== "/sent" && (
        <UserData
          nickname={nickname}
          setIsLoggued={setIsLoggued}
          isLoggued={isLoggued}
        />
      )}
      <img src={hero} alt="Représente les applications Ikodi" />
    </header>
  );
};

export default Header;
