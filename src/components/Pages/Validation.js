import { Field } from "react-final-form";

const Validation = ({ showContact }) => (
  <div>
    <h3>
      Si vous le souhaitez vous pouvez transmettre vos coordonnées et un message
      avec vos réponses.
    </h3>
    <div className="inputcolumn">
      <label>
        Nom :
        <Field name="name" component="input" type="text" placeholder="Nom" />
      </label>
      <label>
        Email :
        <Field
          name="email"
          component="input"
          type="email"
          placeholder="Email"
        />
      </label>
    </div>
    <label>Message :</label>
    <Field
      name="message"
      component="textarea"
      placeholder="..."
      maxLength="500"
    />

    {showContact && (
      <div>
        <h3>Souhaitez-vous être recontacté(e) ?</h3>
        <div className="inputcolumn">
          <label>
            <Field
              name="askContact"
              component="input"
              type="radio"
              value="true"
            />{" "}
            oui
          </label>
          <label>
            <Field
              name="askContact"
              component="input"
              type="radio"
              value="false"
            />{" "}
            non
          </label>
        </div>
      </div>
    )}
  </div>
);
export default Validation;