import { useEffect } from "react";
import { Field } from "react-final-form";
import Error from "../Error/Error";

const Opinion = ({ showRate }) => {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <div>
      <h2>A quelles applications ou pages avez-vous jeté un oeil ?</h2>
      <div className="inputcolumn">
        <label>
          <Field
            name="app"
            component="input"
            type="checkbox"
            value="portefolio"
          />{" "}
          Le portefolio
        </label>
        <label>
          <Field
            name="app"
            component="input"
            type="checkbox"
            value="chronofit"
          />{" "}
          Chronofit
        </label>
        <label>
          <Field name="app" component="input" type="checkbox" value="concord" />{" "}
          Concord
        </label>
        <label>
          <Field name="app" component="input" type="checkbox" value="games" />{" "}
          Les jeux
        </label>
        <label>
          <Field name="app" component="input" type="checkbox" value="auth" />{" "}
          L'app d'authentification
        </label>
      </div>
      <Error name="app" />
      <hr />
      <div className="blurcontainer">
        {!showRate && <div className="blurcontainer__blur"></div>}
        <h2>Que pensez-vous de ce que vous avez vu ?</h2>
        <div className="rangerow">
          <div className="emoticon">😕</div>
          <Field
            name="rate"
            component="input"
            type="range"
            min="0"
            max="10"
            step="1"
          />
          <div className="emoticon">😁</div>
        </div>

        <h3>Vos conseils pour m'aider à m'améliorer</h3>
        <Field
          name="advice"
          component="textarea"
          placeholder="Vos conseils"
          rows="5"
          maxLength="500"
        />
      </div>
    </div>
  );
};

export default Opinion;
