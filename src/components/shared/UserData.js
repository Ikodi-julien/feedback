import { useState } from "react";
import Button from "../Button/Button";
import { FaEllipsisV, FaTimes } from "react-icons/fa";
import { AUTH_URL, AUTH_URL_FRONT } from "../../helpers/settings";
import axios from "axios";

const UserData = ({ nickname, isLoggued, setIsLoggued }) => {
  const [asideOpen, setAside] = useState(false);

  const handleLogout = () => {
    axios.post(`${AUTH_URL}/logout`, {}, { withCredentials: true });
    setIsLoggued(false);
  };
  return (
    <aside className={asideOpen ? "open" : ""}>
      {asideOpen ? (
        isLoggued ? (
          <div className="container">
            <div onClick={() => setAside(!asideOpen)} className="icon">
              <FaTimes />
            </div>
            <div>Connecté en tant que {`${nickname}`}</div>
            <Button onClick={handleLogout} color="blue">
              Déconnexion
            </Button>
          </div>
        ) : (
          <div className="container">
            <div onClick={() => setAside(!asideOpen)} className="icon">
              <FaTimes />
            </div>
            <a href={`${AUTH_URL_FRONT}?app=feedback`}>
              <Button color="blue">Connexion avec auth.ikodi.eu</Button>
            </a>
          </div>
        )
      ) : (
        <div onClick={() => setAside(!asideOpen)} className="icon">
          <FaEllipsisV />
        </div>
      )}
    </aside>
  );
};
export default UserData;
