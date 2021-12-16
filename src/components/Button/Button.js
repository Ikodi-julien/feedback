import "./button.scss";

const Button = (props) => (
  <button
    className={`button ${props.color}`}
    type={props.type}
    onClick={props.onClick}
  >
    {props.children}
  </button>
);
export default Button;
