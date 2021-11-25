import React from "react";
import {Form, Field} from 'react-final-form';
import './landing.scss';

const Landing = () => {
  const onSubmit = (evt) => {
    evt.preventDefault();
    console.log('submit');
  }
  
  return (
    <Form 
      onSubmit={onSubmit}
      render= {({handleSubmit}) => (
          <form onSubmit={handleSubmit}>
            <h2>Qui êtes-vous ?</h2>
            <label>
              <Field 
                name="user"
                component="input"
                type="radio"
                value="visitor"
                />Un visiteur curieux
            </label>
            <label>
              <Field 
                name="user"
                component="input"
                type="radio"
                value="recruter"
                />Un chargé de recrutement
            </label>
            <label>
              <Field 
                name="user"
                component="input"
                type="radio"
                value="client"
                />Un client potentiel
            </label>
            <label>
              <Field 
                name="user"
                component="input"
                type="radio"
                value="goat"
                />Une chèvre
            </label>
            <button type="submit">Valider</button>
          </form>
        )
      }
    />
  )
}
export default Landing;