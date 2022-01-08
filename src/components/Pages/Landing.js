import { Field } from "react-final-form";
import Error from "../Error/Error";

// const required = value => (value ? undefined : 'Obligatoire');

const Landing = () => (
  <div>
    <h1>Questionnaire de satisfaction</h1>
    <ul className="subtitle">
      <li>
        <em>Concerne le portefolio et les applications Ikodi</em>
      </li>
      <li>
        <em>Durée: environ 2 minutes</em>
      </li>
      <li>
        <em>
          Optionnel : Connectez-vous avec un compte Ikodi pour pré-remplir vos
          coordonnées (lien dans le menu).
        </em>
      </li>
    </ul>
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
