import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./shared/Header";
import Wizard from "./Wizard/Wizard";
import Landing from "./Pages/Landing";
import Opinion from "./Pages/Opinion";
import Validation from "./Pages/Validation";
import "./formwrapper.scss";
import axios from "axios";

const FormWrapper = () => {
  const [showRate, setShowRate] = useState(false);
  const [showContact, setShowContact] = useState(false);

  // const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  let navigate = useNavigate();

  const onSubmit = async (values) => {
    try {
      const response = await axios.post(
        `${
          process.env.NODE_ENV === "production"
            ? "https://feedback.ikodi.eu/feedback"
            : "http://localhost:5555/feedback"
        }`,
        {
          values,
        }
      );
      window.alert(response.data.message);
    } catch (error) {
      window.alert(
        error.response
          ? error.response.message
          : "Aïe ça n'a pas fonctionné, le dev a dû arrêter le serveur, ça arrive parfois... désolé"
      );
    } finally {
      navigate("/sent");
    }
  };
  return (
    <div className="satisfactionapp">
      <div className="satisfactionapp__wrapper">
        <Header />
        <Wizard initialValues={{ rate: "5" }} onSubmit={onSubmit}>
          <Wizard.Page
            validate={(values) => {
              const errors = {};
              if (!values.user) {
                errors.user = "* Mais qui êtes-vous donc ?";
              }

              return errors;
            }}
          >
            <Landing />
          </Wizard.Page>

          <Wizard.Page
            validate={(values) => {
              const errors = {};
              if (!values.app || !values.app.length) {
                errors.app =
                  "* Allez, vous avez bien vu quelque chose avant d'atterrir ici ?";
                setShowRate(false);
              }
              if (values.app?.length) setShowRate(true);
              return errors;
            }}
          >
            <Opinion showRate={showRate} />
          </Wizard.Page>
          <Wizard.Page
            validate={(values) => {
              if (values.email) setShowContact(true);
              if (!values.email) setShowContact(false);
            }}
          >
            <Validation showContact={showContact} />
          </Wizard.Page>
        </Wizard>
      </div>
    </div>
  );
};
export default FormWrapper;
