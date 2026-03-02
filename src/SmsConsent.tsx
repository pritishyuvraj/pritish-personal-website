import { useState } from 'react';
import { Link } from 'react-router-dom';
import './SmsConsent.css';

function SmsConsent() {
  const [phone, setPhone] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (agreed && phone) {
      setSubmitted(true);
    }
  };

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
            <h1>SMS Messaging Consent</h1>
            <p className="consent-subtitle">
              CosechaAI — Agricultural Data Insights via SMS
            </p>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="consent-form">
              <div className="consent-info">
                <h2>What You're Signing Up For</h2>
                <p>
                  By providing your phone number and checking the consent box below, 
                  you agree to receive SMS messages from <strong>CosechaAI</strong> regarding:
                </p>
                <ul>
                  <li>Agricultural market data alerts and insights</li>
                  <li>Responses to your agriculture data queries</li>
                  <li>Service updates and notifications</li>
                  <li>Account-related messages</li>
                </ul>
              </div>

              <div className="consent-terms">
                <h2>Terms</h2>
                <ul>
                  <li><strong>Message Frequency:</strong> Message frequency varies. You may receive up to 10 messages per week depending on your query activity and alert preferences.</li>
                  <li><strong>Message & Data Rates:</strong> Standard message and data rates may apply. Check with your carrier for details.</li>
                  <li><strong>Opt-Out:</strong> You can opt out at any time by replying <strong>STOP</strong> to any message. You will receive a confirmation and no further messages.</li>
                  <li><strong>Help:</strong> Reply <strong>HELP</strong> to any message for support, or email <a href="mailto:pritish.yuvi@gmail.com">pritish.yuvi@gmail.com</a>.</li>
                  <li><strong>Consent Not Required:</strong> Consent to receive SMS is not a condition of purchase or use of our services.</li>
                </ul>
              </div>

              <div className="consent-form-fields">
                <label htmlFor="phone" className="consent-label">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="consent-input"
                  placeholder="+1 (555) 123-4567"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />

                <div className="consent-checkbox-row">
                  <input
                    type="checkbox"
                    id="consent"
                    className="consent-checkbox"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    required
                  />
                  <label htmlFor="consent" className="consent-checkbox-label">
                    I agree to receive SMS messages from CosechaAI at the phone number provided. 
                    I understand that message and data rates may apply, and I can reply STOP to 
                    opt out at any time. I have read and agree to the terms above.
                  </label>
                </div>

                <button
                  type="submit"
                  className="consent-submit"
                  disabled={!agreed || !phone}
                >
                  I Agree — Sign Me Up
                </button>
              </div>

              <div className="consent-footer-info">
                <p>
                  For questions about our messaging program, contact us at{' '}
                  <a href="mailto:pritish.yuvi@gmail.com">pritish.yuvi@gmail.com</a>.
                </p>
                <p>
                  <Link to="/agriculture-agent/privacy-policy">Privacy Policy</Link>
                </p>
              </div>
            </form>
          ) : (
            <div className="consent-success">
              <div className="consent-success-icon">✅</div>
              <h2>You're Signed Up!</h2>
              <p>
                Thank you for opting in to CosechaAI SMS alerts. You will receive a 
                confirmation message at <strong>{phone}</strong> shortly.
              </p>
              <p className="consent-success-note">
                Remember: you can reply <strong>STOP</strong> at any time to opt out, 
                or <strong>HELP</strong> for assistance.
              </p>
              <Link to="/agriculture-agent" className="consent-back-btn">
                ← Back to CosechaAI
              </Link>
            </div>
          )}
        </div>
      </main>

      <footer className="consent-page-footer">
        <p>&copy; {new Date().getFullYear()} CosechaAI. All rights reserved.</p>
        <p>Contact: <a href="mailto:pritish.yuvi@gmail.com">pritish.yuvi@gmail.com</a> | Pritish Yuvraj</p>
      </footer>
    </div>
  );
}

export default SmsConsent;
