import {Field} from 'react-final-form';

const Error = ({name}) => (
  <Field
    name={name}
    subscription={{touched: true, error: true}}
    render={({ meta: {touched, error}}) => 
      touched && error ? <span className="input-error">{error}</span> : null
    }
  />
);
export default Error;