import { Field } from "react-final-form";
import Error from "../Error/Error";

// const required = value => (value ? undefined : 'Obligatoire');

const Landing = () => (
  <div>
    <h1>Questionnaire de satisfaction</h1>
    <div className="subtitle">
      <p>
        <em>Concerne le portefolio et les applications Ikodi</em>
      </p>
      <p>
        <em>Durée: environ 2 minutes</em>
      </p>
    </div>
    <hr />
    <h2>Vous êtes:</h2>
    <div className="inputcolumn">
      <label>
        <Field name="user" component="input" type="radio" value="visitor" /> Un
        visiteur curieux
      </label>
      <label>
        <Field name="user" component="input" type="radio" value="recruter" /> Un
        chargé de recrutement
      </label>
      <label>
        <Field name="user" component="input" type="radio" value="client" /> Un
        client potentiel
      </label>
      <label>
        <Field name="user" component="input" type="radio" value="goat" /> 🐐
      </label>
      <label>
        <Field name="user" component="input" type="radio" value="unicorn" /> 🦄
      </label>
    </div>
    <Error name="user" />
  </div>
);
export default Landing;
