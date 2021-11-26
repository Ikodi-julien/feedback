import {Field} from 'react-final-form';
import Wizard from '../Wizard/Wizard';

const Landing = () => (
  <Wizard.Page>
    <h2>Qui êtes-vous ?</h2>
    <label>
      <Field 
        name="user"
        component="input"
        type="radio"
        value="visitor"
        />{' '}Un visiteur curieux
    </label>
    <label>
      <Field 
        name="user"
        component="input"
        type="radio"
        value="recruter"
        />{' '}Un chargé de recrutement
    </label>
    <label>
      <Field 
        name="user"
        component="input"
        type="radio"
        value="client"
        />{' '}Un client potentiel
    </label>
    <label>
      <Field 
        name="user"
        component="input"
        type="radio"
        value="goat"
        />{' '}🐐
    </label>
    <label>
      <Field 
        name="user"
        component="input"
        type="radio"
        value="unicorn"
        />{' '}🦄
    </label>
  </Wizard.Page>
)
export default Landing;