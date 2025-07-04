import './App.css';

function App() {
  return (
    <div className="app">
      <div className="container">
        {/* Header with Photo and Basic Info */}
        <div className="header">
          <div className="profile-section">
            <img
              src="/images/pritish_yuvraj_professional_photo.jpg"
              alt="Pritish Yuvraj"
              className="profile-photo"
            />
            <div className="profile-info">
              <h1 className="name">Pritish Yuvraj</h1>
              <p className="description">
                I am a Machine Learning Engineer at Meta, specializing in Large Language Models (LLMs), 
                AI/ML infrastructure, and scalable solutions. I have worked extensively on 
                projects involving LLama 3 and other cutting-edge AI technologies.
              </p>
              <p className="description">
                My expertise spans across model optimization, fine-tuning, deployment, and 
                building robust ML infrastructure. I'm passionate about pushing the boundaries 
                of what's possible with AI and contributing to the advancement of the field.
              </p>
            </div>
          </div>
        </div>

        {/* News Section */}
        <div className="section">
          <h2 className="section-title">News</h2>
          <div className="news-list">
            <div className="news-item">
              <span className="news-date">[Aug 2024]</span>
              <span className="news-text">Co-authored "The llama 3 herd of models" publication</span>
            </div>
            <div className="news-item">
              <span className="news-date">[Mar 2024]</span>
              <span className="news-text">Working on LLama 3 development and optimization at Meta</span>
            </div>
            <div className="news-item">
              <span className="news-date">[Jul 2018]</span>
              <span className="news-text">Won Best Paper Award at ACL for "A Systematic Classification of Knowledge, Reasoning, and Context within the ARC Dataset"</span>
            </div>
            <div className="news-item">
              <span className="news-date">[Mar 2016]</span>
              <span className="news-text">Presented research on Modified Apriori Algorithm at IEEE ICIIECS'16</span>
            </div>
          </div>
        </div>

        {/* Key Projects */}
        <div className="section">
          <h2 className="section-title">Key Projects</h2>
          <div className="projects-list">
            <div className="project-item">
              <span className="project-star">★</span>
              <span className="project-name">LLama 3:</span>
              <span className="project-desc">Large Language Model development and optimization at Meta</span>
            </div>
            <div className="project-item">
              <span className="project-star">★</span>
              <span className="project-name">ARC Dataset Research:</span>
              <span className="project-desc">A Systematic Classification of Knowledge, Reasoning, and Context</span>
            </div>
            <div className="project-item">
              <span className="project-star">★</span>
              <span className="project-name">Modified Apriori Algorithm:</span>
              <span className="project-desc">Improved frequent pattern mining with O((V)(E)) time complexity</span>
            </div>
            <div className="project-item">
              <span className="project-star">★</span>
              <span className="project-name">Mining User Data for Intelligent Predictions:</span>
              <span className="project-desc">Predictive analytics for user behavior and travel patterns</span>
            </div>
          </div>
        </div>

        {/* Experience */}
        <div className="section">
          <h2 className="section-title">Experience</h2>
          <div className="experience-list">
            <div className="experience-item">
              <h3 className="job-title">Machine Learning Engineer</h3>
              <p className="job-company">Meta</p>
              <p className="job-date">Present</p>
              <ul className="job-details">
                <li>Working on LLama 3 model development and optimization</li>
                <li>Contributing to large-scale AI infrastructure and deployment</li>
                <li>Research and development in Large Language Models</li>
              </ul>
            </div>
            
            <div className="experience-item">
              <h3 className="job-title">Previous Experience</h3>
              <p className="job-company">Various Companies</p>
              <p className="job-date">2017 - Present</p>
              <ul className="job-details">
                <li>Machine Learning and AI research roles</li>
                <li>Published research papers in top conferences (ACL, IEEE)</li>
                <li>Won Best Paper Award at ACL 2018</li>
      </ul>
            </div>
          </div>
        </div>

        {/* Publications */}
        <div className="section">
          <h2 className="section-title">Publications</h2>
          <div className="publications-list">
            <div className="publication-item">
              <h3 className="pub-title">The llama 3 herd of models</h3>
              <p className="pub-authors">Archive, August 15, 2024</p>
            </div>
            <div className="publication-item">
              <h3 className="pub-title">A Systematic Classification of Knowledge, Reasoning, and Context within the ARC Dataset</h3>
              <p className="pub-authors">Association for Computational Linguistics (ACL), Jul 2018</p>
              <p className="pub-note">🏆 Best Paper Award at MRQA 2018</p>
            </div>
            <div className="publication-item">
              <h3 className="pub-title">Modified Apriori Graph Algorithm for Frequent Pattern Mining</h3>
              <p className="pub-authors">IEEE Sponsored Conference ICIIECS'16, March 16, 2016</p>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="section">
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Machine Learning</h3>
              <p>PyTorch, TensorFlow, Transformers, Hugging Face, Scikit-learn, LLama 3</p>
            </div>
            <div className="skill-category">
              <h3>Programming</h3>
              <p>Python, C++, JavaScript, TypeScript, R</p>
            </div>
            <div className="skill-category">
              <h3>Research Areas</h3>
              <p>Natural Language Processing, Neural Networks, Machine Learning, Statistics</p>
            </div>
            <div className="skill-category">
              <h3>Tools & Frameworks</h3>
              <p>Git, Jupyter, FastAPI, React, PostgreSQL, Kaggle</p>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="section">
          <h2 className="section-title">Contact</h2>
          <div className="contact-links">
            <a href="mailto:pritish.yuvi@gmail.com">Email</a>
            <a href="https://www.linkedin.com/in/pritishyuvraj" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/pritishyuvraj" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://x.com/pritish_yuvi" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://scholar.google.com/citations?user=Uce8tz6kQR0C&hl=en" target="_blank" rel="noopener noreferrer">Google Scholar</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
