import Header from "../shared/Header";
import Button from "../Button/Button";
import "./confirm.scss";

const Confirm = () => (
  <section className="satisfactionapp__confirm">
    <div className="satisfactionapp__confirm__wrapper">
      <Header />
      <p>Merci pour votre participation et à bientôt j’espère.</p>
      <a href="https://portfolio.ikodi.eu">
        <Button>Quitter</Button>
      </a>
    </div>
  </section>
);
export default Confirm;
