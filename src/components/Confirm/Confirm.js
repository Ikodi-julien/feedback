import Header from "../shared/Header";
import Button from "../Button/Button";
import "./confirm.scss";

const Confirm = () => (
  <section className="satisfactionapp__confirm">
    <div className="satisfactionapp__confirm__wrapper">
      <Header />
      <p>
        Vos réponses ont bien été envoyées, merci pour votre participation et à
        bientôt j’espère.
      </p>
      <a href="https://ikodi.eu">
        <Button>Quitter</Button>
      </a>
    </div>
  </section>
);
export default Confirm;
