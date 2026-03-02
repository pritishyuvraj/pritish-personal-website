import './AgricultureAgent.css';
import { Link } from 'react-router-dom';

function AgricultureAgent() {
  return (
    <div className="agri-page">
      <nav className="agri-navbar">
        <div className="agri-nav-container">
          <Link to="/agriculture-agent" className="agri-nav-brand">
            <span className="agri-brand-icon">🌾</span>
            CosechaAI
          </Link>
          <div className="agri-nav-links">
            <a href="#features" className="agri-nav-link">Features</a>
            <a href="#use-cases" className="agri-nav-link">Use Cases</a>
            <a href="#how-it-works" className="agri-nav-link">How It Works</a>
            <a href="#contact" className="agri-nav-link">Contact</a>
          </div>
        </div>
      </nav>

      <section className="agri-hero">
        <div className="agri-hero-content">
          <div className="agri-hero-badge">AI-Powered Agriculture Intelligence for Latin America</div>
          <h1 className="agri-hero-title">
            Data-Driven Insights<br />
            <span className="agri-hero-accent">for Your Harvest</span>
          </h1>
          <p className="agri-hero-subtitle">
            CosechaAI is an intelligent agent built for farmers and exporters in Ecuador 
            and Colombia. Get real-time trade data, market trends, and pricing analytics 
            for flowers, produce, and agricultural commodities — in English or Spanish.
          </p>
          <div className="agri-hero-actions">
            <a href="#contact" className="agri-btn agri-btn-primary">Get Started</a>
            <a href="#use-cases" className="agri-btn agri-btn-secondary">See Examples</a>
          </div>
          <div className="agri-hero-stats">
            <div className="agri-stat">
              <span className="agri-stat-number">50+</span>
              <span className="agri-stat-label">Export Markets Tracked</span>
            </div>
            <div className="agri-stat">
              <span className="agri-stat-number">10K+</span>
              <span className="agri-stat-label">Crop & Flower Varieties</span>
            </div>
            <div className="agri-stat">
              <span className="agri-stat-number">15yr</span>
              <span className="agri-stat-label">Historical Data</span>
            </div>
          </div>
        </div>
      </section>

      <section className="agri-section" id="features">
        <div className="agri-section-inner">
          <h2 className="agri-section-title">What CosechaAI Does</h2>
          <p className="agri-section-subtitle">
            Our agent processes billions of agriculture trade records so farmers and exporters 
            in Ecuador and Colombia can make smarter decisions.
          </p>
          <div className="agri-features-grid">
            <div className="agri-feature-card">
              <div className="agri-feature-icon">🌹</div>
              <h3 className="agri-feature-title">Flower Export Intelligence</h3>
              <p className="agri-feature-desc">
                Deep insights into rose, gypsophila, carnation, and tropical flower exports. 
                Track demand by variety, season, and destination — from Miami to Dubai to Rotterdam.
              </p>
            </div>
            <div className="agri-feature-card">
              <div className="agri-feature-icon">📊</div>
              <h3 className="agri-feature-title">Trade Volume Analytics</h3>
              <p className="agri-feature-desc">
                Track import/export volumes for any agricultural commodity by country 
                or region. See exactly where your crops are going and who's buying.
              </p>
            </div>
            <div className="agri-feature-card">
              <div className="agri-feature-icon">📈</div>
              <h3 className="agri-feature-title">Price & Trend Forecasting</h3>
              <p className="agri-feature-desc">
                AI-powered models predict pricing trends and seasonal demand shifts, 
                helping you time your harvest and negotiate better with buyers.
              </p>
            </div>
            <div className="agri-feature-card">
              <div className="agri-feature-icon">🍌</div>
              <h3 className="agri-feature-title">Produce & Commodity Tracking</h3>
              <p className="agri-feature-desc">
                Beyond flowers — track bananas, cacao, coffee, avocados, shrimp, and 
                other key exports from Ecuador and Colombia in real time.
              </p>
            </div>
            <div className="agri-feature-card">
              <div className="agri-feature-icon">💬</div>
              <h3 className="agri-feature-title">Ask in English or Spanish</h3>
              <p className="agri-feature-desc">
                Ask questions naturally — "¿Cuántas rosas Freedom se exportaron a Dubai 
                el año pasado?" — and get structured, data-backed answers instantly.
              </p>
            </div>
            <div className="agri-feature-card">
              <div className="agri-feature-icon">🔗</div>
              <h3 className="agri-feature-title">API & Integrations</h3>
              <p className="agri-feature-desc">
                RESTful API access for seamless integration into your existing supply chain 
                management, ERP, or business intelligence tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="agri-section agri-section-alt" id="use-cases">
        <div className="agri-section-inner">
          <h2 className="agri-section-title">Example Queries</h2>
          <p className="agri-section-subtitle">
            Here's what you can ask CosechaAI. Just type your question and get instant answers.
          </p>
          <div className="agri-queries-list">
            <div className="agri-query-card">
              <div className="agri-query-question">
                <span className="agri-query-icon">Q</span>
                "How many roses were bought in Dubai this year?"
              </div>
              <div className="agri-query-answer">
                <span className="agri-query-tag">Answer</span>
                Dubai imported approximately 1.2 billion rose stems in 2025, a 7.3% increase 
                from 2024. Ecuador supplied 18% of that volume, making it the third-largest 
                supplier after Ethiopia (42%) and Kenya (31%).
              </div>
            </div>
            <div className="agri-query-card">
              <div className="agri-query-question">
                <span className="agri-query-icon">Q</span>
                "¿Cuántas rosas Freedom se compraron el año pasado?"
              </div>
              <div className="agri-query-answer">
                <span className="agri-query-tag">Respuesta</span>
                Global procurement of Freedom roses (a premium red variety) totaled 
                approximately 340 million stems in 2024. Ecuador was the leading exporter 
                with 38% of global supply, followed by Colombia (27%) and Kenya (19%).
              </div>
            </div>
            <div className="agri-query-card">
              <div className="agri-query-question">
                <span className="agri-query-icon">Q</span>
                "What is the average price per stem of Ecuadorian roses in the European market?"
              </div>
              <div className="agri-query-answer">
                <span className="agri-query-tag">Answer</span>
                Ecuadorian roses averaged $0.62/stem FOB in the European market for 2025, 
                with premium long-stem varieties reaching $1.10/stem. Valentine's Day peak 
                pricing hit $1.85/stem, up 12% year-over-year.
              </div>
            </div>
            <div className="agri-query-card">
              <div className="agri-query-question">
                <span className="agri-query-icon">Q</span>
                "How much coffee did Colombia export to the US last quarter?"
              </div>
              <div className="agri-query-answer">
                <span className="agri-query-tag">Answer</span>
                Colombia exported 1.38 million 60kg bags of coffee to the United States 
                in Q4 2025, representing a 4.2% increase from Q3. Average FOB price was 
                $2.41/lb, with specialty lots from Huila and Nariño reaching $4.80/lb.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="agri-section" id="how-it-works">
        <div className="agri-section-inner">
          <h2 className="agri-section-title">How It Works</h2>
          <div className="agri-steps">
            <div className="agri-step">
              <div className="agri-step-number">1</div>
              <h3 className="agri-step-title">Ask Your Question</h3>
              <p className="agri-step-desc">
                Type any agriculture question in English or Spanish. 
                No complex query language needed.
              </p>
            </div>
            <div className="agri-step-connector" />
            <div className="agri-step">
              <div className="agri-step-number">2</div>
              <h3 className="agri-step-title">AI Processes Data</h3>
              <p className="agri-step-desc">
                Our agent analyzes trade records, market reports, 
                and pricing data from global sources.
              </p>
            </div>
            <div className="agri-step-connector" />
            <div className="agri-step">
              <div className="agri-step-number">3</div>
              <h3 className="agri-step-title">Get Actionable Insights</h3>
              <p className="agri-step-desc">
                Receive structured, data-backed answers with sourcing, 
                charts, and export options.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="agri-section agri-section-alt" id="pricing">
        <div className="agri-section-inner">
          <h2 className="agri-section-title">Plans</h2>
          <div className="agri-pricing-grid">
            <div className="agri-pricing-card">
              <h3 className="agri-pricing-name">Starter</h3>
              <div className="agri-pricing-price">$49<span>/mo</span></div>
              <ul className="agri-pricing-features">
                <li>100 queries per month</li>
                <li>5 export markets</li>
                <li>Basic trend reports</li>
                <li>Email support</li>
              </ul>
            </div>
            <div className="agri-pricing-card agri-pricing-featured">
              <div className="agri-pricing-badge">Most Popular</div>
              <h3 className="agri-pricing-name">Professional</h3>
              <div className="agri-pricing-price">$199<span>/mo</span></div>
              <ul className="agri-pricing-features">
                <li>Unlimited queries</li>
                <li>All 50+ export markets</li>
                <li>Advanced forecasting</li>
                <li>API access</li>
                <li>Priority support</li>
              </ul>
            </div>
            <div className="agri-pricing-card">
              <h3 className="agri-pricing-name">Enterprise</h3>
              <div className="agri-pricing-price">Custom</div>
              <ul className="agri-pricing-features">
                <li>Everything in Professional</li>
                <li>Custom data integrations</li>
                <li>Dedicated account manager</li>
                <li>SLA guarantee</li>
                <li>On-premise deployment</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="agri-section agri-cta-section" id="contact">
        <div className="agri-section-inner">
          <h2 className="agri-cta-title">Ready to grow smarter?</h2>
          <p className="agri-cta-subtitle">
            Get in touch to learn how CosechaAI can power your agriculture business decisions.
          </p>
          <div className="agri-contact-details">
            <p className="agri-contact-name">Pritish Yuvraj</p>
            <a href="mailto:pritish.yuvi@gmail.com" className="agri-btn agri-btn-primary">
              pritish.yuvi@gmail.com
            </a>
          </div>
        </div>
      </section>

      <footer className="agri-footer">
        <div className="agri-footer-inner">
          <div className="agri-footer-brand">
            <span className="agri-brand-icon">🌾</span> CosechaAI
          </div>
          <p className="agri-footer-text">
            &copy; {new Date().getFullYear()} CosechaAI. All rights reserved.
          </p>
          <div className="agri-footer-links">
            <Link to="/">Personal Site</Link>
            <a href="mailto:pritish.yuvi@gmail.com">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default AgricultureAgent;
