import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./shared/Header";
import Wizard from "./Wizard/Wizard";
import Landing from "./Pages/Landing";
import Opinion from "./Pages/Opinion";
import Validation from "./Pages/Validation";
import "./formwrapper.scss";
import axios from "axios";
import { AUTH_URL } from "../helpers/settings";

const FormWrapper = () => {
  const [showRate, setShowRate] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [initialValues, setInitialValues] = useState({ rate: "5" });
  const [isLoggued, setIsLoggued] = useState(false);

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

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(`${AUTH_URL}/me`, {
          withCredentials: true,
        });
        console.log(response.data);
        if (response.data) {
          setInitialValues({
            ...initialValues,
            name: response.data.nickname,
            email: response.data.email,
          });
          setIsLoggued(true);
        }
      } catch (error) {
        console.log(error);
      } finally {
      }
    })();

    // return () => {
    //   setEmail("");
    //   setNickname("");
    //   setIsLoggued(false);
    // };
  }, []);

  return (
    <div className="satisfactionapp">
      <div className="satisfactionapp__wrapper">
        <Header
          isLoggued={isLoggued}
          setIsLoggued={setIsLoggued}
          nickname={initialValues.name}
        />
        <Wizard initialValues={initialValues} onSubmit={onSubmit}>
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
            <Validation showContact={showContact} isLoggued={isLoggued} />
          </Wizard.Page>
        </Wizard>
      </div>
    </div>
  );
};
export default FormWrapper;
