import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FormWrapper from "./components/FormWrapper";
import Confirm from "./components/Confirm/Confirm";

const SatisfactionApp = () => (
  <Router>
    <Routes>
      <Route path="/sent" element={<Confirm />} />
      <Route path="/" element={<FormWrapper />} />
    </Routes>
  </Router>
);

export default SatisfactionApp;
