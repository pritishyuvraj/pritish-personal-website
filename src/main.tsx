import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.tsx";
import AgricultureAgent from "./AgricultureAgent.tsx";
import SmsConsent from "./SmsConsent.tsx";
import PrivacyPolicy from "./PrivacyPolicy.tsx";
import "./index.css";
// import { Amplify } from "aws-amplify";
// import outputs from "../amplify_outputs.json";

// Amplify.configure(outputs);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/agriculture-agent" element={<AgricultureAgent />} />
      <Route path="/agriculture-agent/sms-consent" element={<SmsConsent />} />
      <Route path="/agriculture-agent/privacy-policy" element={<PrivacyPolicy />} />
    </Routes>
  </BrowserRouter>
);
