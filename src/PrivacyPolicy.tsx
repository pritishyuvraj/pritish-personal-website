import { Link } from 'react-router-dom';
import './SmsConsent.css';

function PrivacyPolicy() {
  return (
    <div className="consent-page">
      <nav className="consent-navbar">
        <div className="consent-nav-container">
          <Link to="/agriculture-agent" className="consent-nav-brand">
            <span className="consent-brand-icon">🌾</span>
            CosechaAI
          </Link>
          <Link to="/agriculture-agent" className="consent-back-link">← Back to CosechaAI</Link>
        </div>
      </nav>

      <main className="consent-main">
        <div className="consent-card">
          <div className="consent-header">
            <h1>Privacy Policy</h1>
            <p className="consent-subtitle">CosechaAI — Effective March 1, 2026</p>
          </div>

          <div className="consent-form" style={{ textAlign: 'left' }}>
            <div className="consent-info">
              <h2>1. Introduction</h2>
              <p>
                CosechaAI ("we," "us," or "our") is committed to protecting the privacy of our 
                users ("you" or "your"). This Privacy Policy explains how we collect, use, disclose, 
                and safeguard your information when you use our agricultural data insights service, 
                including our website and SMS messaging service.
              </p>
            </div>

            <div className="consent-info">
              <h2>2. Information We Collect</h2>
              <p>We may collect the following types of information:</p>
              <ul>
                <li><strong>Contact Information:</strong> Name, email address, phone number provided when you sign up for our services or SMS alerts.</li>
                <li><strong>Usage Data:</strong> Queries submitted to our platform, interaction logs, and feature usage patterns.</li>
                <li><strong>Device Information:</strong> Browser type, IP address, and device identifiers when accessing our website.</li>
              </ul>
            </div>

            <div className="consent-info">
              <h2>3. How We Use Your Information</h2>
              <p>We use collected information to:</p>
              <ul>
                <li>Provide and improve our agricultural data insights service</li>
                <li>Send SMS messages including query responses, market alerts, and service notifications</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Analyze usage patterns to improve our platform</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            <div className="consent-info">
              <h2>4. SMS Messaging</h2>
              <p>
                When you opt in to receive SMS messages from CosechaAI, we collect your phone number 
                and use it solely to deliver the messaging services you requested. Specifically:
              </p>
              <ul>
                <li>We send SMS messages only to users who have explicitly opted in via our <Link to="/agriculture-agent/sms-consent">web form</Link>.</li>
                <li>Message frequency varies based on your activity and alert preferences, up to 10 messages per week.</li>
                <li>Message and data rates may apply. Check with your carrier for details.</li>
                <li>You may opt out at any time by replying <strong>STOP</strong> to any message.</li>
                <li>Reply <strong>HELP</strong> for assistance, or contact <a href="mailto:pritish.yuvi@gmail.com">pritish.yuvi@gmail.com</a>.</li>
                <li>We do not sell, rent, or share your phone number with third parties for their marketing purposes.</li>
                <li>Consent to receive SMS messages is not a condition of purchasing or using our services.</li>
              </ul>
            </div>

            <div className="consent-info">
              <h2>5. Data Sharing</h2>
              <p>
                We do not sell your personal information. We may share your information only in the 
                following circumstances:
              </p>
              <ul>
                <li><strong>Service Providers:</strong> With third-party vendors who assist in operating our platform (e.g., SMS delivery providers like Twilio), subject to confidentiality agreements.</li>
                <li><strong>Legal Requirements:</strong> When required by law, regulation, or legal process.</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets.</li>
              </ul>
            </div>

            <div className="consent-info">
              <h2>6. Data Security</h2>
              <p>
                We implement reasonable technical and organizational measures to protect your 
                personal information against unauthorized access, alteration, disclosure, or 
                destruction. However, no method of transmission over the Internet or electronic 
                storage is 100% secure.
              </p>
            </div>

            <div className="consent-info">
              <h2>7. Data Retention</h2>
              <p>
                We retain your personal information for as long as necessary to fulfill the purposes 
                described in this policy, unless a longer retention period is required by law. 
                When you opt out of SMS messaging, we remove your phone number from our active 
                messaging list promptly.
              </p>
            </div>

            <div className="consent-info">
              <h2>8. Your Rights</h2>
              <p>You have the right to:</p>
              <ul>
                <li>Request access to the personal data we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt out of SMS messaging at any time by replying STOP</li>
              </ul>
            </div>

            <div className="consent-info">
              <h2>9. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any 
                material changes by posting the new policy on this page and updating the effective date.
              </p>
            </div>

            <div className="consent-info">
              <h2>10. Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy or our data practices, contact us at:
              </p>
              <ul>
                <li><strong>Email:</strong> <a href="mailto:pritish.yuvi@gmail.com">pritish.yuvi@gmail.com</a></li>
                <li><strong>Name:</strong> Pritish Yuvraj</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <footer className="consent-page-footer">
        <p>&copy; {new Date().getFullYear()} CosechaAI. All rights reserved.</p>
        <p>Contact: <a href="mailto:pritish.yuvi@gmail.com">pritish.yuvi@gmail.com</a> | Pritish Yuvraj</p>
      </footer>
    </div>
  );
}

export default PrivacyPolicy;
