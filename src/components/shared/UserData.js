import { useState } from "react";
import Button from "../Button/Button";
import { FaEllipsisV, FaTimesCircle } from "react-icons/fa";
import { AUTH_URL, AUTH_URL_FRONT } from "../../helpers/settings";
import axios from "axios";

const UserData = ({ nickname, isLoggued, setIsLoggued }) => {
  const [asideOpen, setAside] = useState(true);

  const handleLogout = () => {
    axios.post(`${AUTH_URL}/logout`, {}, { withCredentials: true });
    setIsLoggued(false);
  };
  return (
    <aside>
      {asideOpen ? (
        isLoggued ? (
          <div className="container">
            <FaTimesCircle
              onClick={() => setAside(!asideOpen)}
              style={{ fontSize: "2em", margin: "0 1rem", cursor: "pointer" }}
            />
            <div>Connecté en tant que {`${nickname}`}</div>
            <Button onClick={handleLogout} color="blue">
              Déconnexion
            </Button>
          </div>
        ) : (
          <div className="container">
            <FaTimesCircle
              onClick={() => setAside(!asideOpen)}
              style={{ fontSize: "2em", margin: "0 1rem", cursor: "pointer" }}
            />
            <a href={`${AUTH_URL_FRONT}?app=feedback`}>
              <Button color="blue">Connexion avec auth.ikodi.eu</Button>
            </a>
          </div>
        )
      ) : (
        <div
          onClick={() => setAside(!asideOpen)}
          style={{
            position: "absolute",
            top: "60px",
            fontSize: "1.5em",
            padding: "1rem",
            cursor: "pointer",
          }}
        >
          <FaEllipsisV />
        </div>
      )}
    </aside>
  );
};
export default UserData;
