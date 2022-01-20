import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FormWrapper from "./components/FormWrapper";
import Confirm from "./components/Confirm/Confirm";
import Footer from "./components/Footer/Footer";

const SatisfactionApp = () => (
  <Router>
    <Routes>
      <Route path="/sent" element={<Confirm />} />
      <Route path="/" element={<FormWrapper />} />
    </Routes>
    <Footer />
  </Router>
);

export default SatisfactionApp;
