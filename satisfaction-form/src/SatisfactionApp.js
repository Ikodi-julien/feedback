import LandingForm from './components/Landing/LandingForm';
import Header from './components/shared/Header';
import Tabs from './components/shared/Tabs';
import './satisfactionApp.scss';

function SatisfactionApp() {
  return (
    <div className="satisfactionapp">
      <div className="satisfactionapp__wrapper">
        <Header />
        <Tabs />
        <LandingForm />
      </div>
    </div>
  );
}

export default SatisfactionApp;
