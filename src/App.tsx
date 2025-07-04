import './App.css';

function App() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-brand">Pritish Yuvraj</div>
          <div className="nav-links">
            <button onClick={() => scrollToSection('podcasts')} className="nav-link">Podcasts</button>
            <button onClick={() => scrollToSection('publications')} className="nav-link">Publications</button>
            <button onClick={() => scrollToSection('achievements')} className="nav-link">Key Achievements</button>
            <button onClick={() => scrollToSection('projects')} className="nav-link">Key Projects</button>
            <button onClick={() => scrollToSection('experience')} className="nav-link">Experience</button>
          </div>
        </div>
      </nav>

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

        {/* Podcasts Section */}
        <div className="section" id="podcasts">
          <h2 className="section-title">Podcasts</h2>
          <div className="podcasts-list">
            <div className="podcast-item">
              <div className="podcast-header">
                <img 
                  src="/images/stanford_logo.webp" 
                  alt="Stanford University" 
                  className="podcast-logo"
                />
                <div className="podcast-header-text">
                  <h3 className="podcast-title">AI Frontiers: Dialogues with Tech Pioneers</h3>
                  <p className="podcast-host">Stanford University Technology Training</p>
                </div>
              </div>
              <p className="podcast-desc">
                Featured guest discussing machine learning, natural language processing, and AI advancements. 
                Shared insights on multilingual capabilities, ethical AI applications, and work spanning 
                child safety, content integrity, and well-being projects at Meta.
              </p>
              <div className="podcast-links">
                <a href="https://uit.stanford.edu/service/techtraining/podcasts/pritish-yuvraj" 
                   target="_blank" rel="noopener noreferrer" className="podcast-link">
                  Listen to Podcast
                </a>
              </div>
            </div>
            
            <div className="podcast-item">
              <div className="podcast-header">
                <div className="podcast-header-text">
                  <h3 className="podcast-title">AI and Machine Learning Discussion</h3>
                  <p className="podcast-host">with Aishwarya Srinivasan</p>
                </div>
              </div>
              <p className="podcast-desc">
                In-depth conversation about machine learning engineering, large language models, 
                and the future of AI technology. Discussed experiences working on cutting-edge 
                AI projects and the impact of machine learning across various domains.
              </p>
              <div className="podcast-links">
                <a href="https://www.youtube.com/watch?v=smhiG9xpevA&t=1142s&pp=ygUOcHJpdGlzaCB5dXZyYWo%3D" 
                   target="_blank" rel="noopener noreferrer" className="podcast-link">
                  Watch on YouTube
                </a>
                <a href="https://www.linkedin.com/in/aishwarya-srinivasan/" 
                   target="_blank" rel="noopener noreferrer" className="podcast-link">
                  Aishwarya's LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Publications Section */}
        <div className="section" id="publications">
          <h2 className="section-title">Publications</h2>
          <div className="publications-list">
            <div className="publication-item">
              <h3 className="pub-title">Layer Swapping for Zero-Shot Cross-Lingual Transfer in Large Language Models</h3>
              <p className="pub-authors">Lucas Bandarkar, Benjamin Muller, Pritish Yuvraj, Rui Hou, Nayan Singhal, Hongjiang Lv, Bing Liu</p>
              <p className="pub-venue">ICLR 2025, Spotlight Paper</p>
              <p className="pub-note">🏆 Spotlight Paper at The Thirteenth International Conference on Learning Representations</p>
              <div className="pub-links">
                <a href="https://arxiv.org/abs/2410.01335" target="_blank" rel="noopener noreferrer" className="pub-link">
                  View on arXiv
                </a>
              </div>
            </div>
            
            <div className="publication-item">
              <h3 className="pub-title">The Llama 3 Herd of Models</h3>
              <p className="pub-authors">Llama Team, AI @ Meta</p>
              <p className="pub-venue">arXiv, July 2024</p>
              <p className="pub-desc">Foundation models with 405B parameters supporting multilinguality, coding, reasoning, and tool usage</p>
              <div className="pub-links">
                <a href="https://arxiv.org/pdf/2407.21783" target="_blank" rel="noopener noreferrer" className="pub-link">
                  View PDF
                </a>
              </div>
            </div>
            
            <div className="publication-item">
              <h3 className="pub-title">A Systematic Classification of Knowledge, Reasoning, and Context within the ARC Dataset</h3>
              <p className="pub-authors">Association for Computational Linguistics (ACL), Jul 2018</p>
              <p className="pub-note">🏆 Best Paper Award at MRQA 2018</p>
              <div className="pub-links">
                <a href="https://arxiv.org/pdf/1806.00358" target="_blank" rel="noopener noreferrer" className="pub-link">
                  View PDF
                </a>
              </div>
            </div>
            
            <div className="publication-item">
              <h3 className="pub-title">An Interface for Annotating Science Questions</h3>
              <p className="pub-authors">Michael Boratko, Harshit Padigela, Divyendra Mikkilineni, Pritish Yuvraj, Rajarshi Das, Andrew McCallum, Maria Chang, Achille Fokoue, Pavan Kapanipathi, Nicholas Mattei, Ryan Musa, Kartik Talamadupula, Michael Witbrock</p>
              <p className="pub-venue">EMNLP 2018</p>
              <p className="pub-desc">Proceedings of the 2018 Conference on Empirical Methods in Natural Language Processing: System Demonstrations</p>
              <div className="pub-links">
                <a href="https://aclanthology.org/D18-2018/" target="_blank" rel="noopener noreferrer" className="pub-link">
                  View on ACL Anthology
                </a>
              </div>
            </div>
            
            <div className="publication-item">
              <h3 className="pub-title">Modified Apriori Graph Algorithm for Frequent Pattern Mining</h3>
              <p className="pub-authors">IEEE Sponsored Conference ICIIECS'16, March 16, 2016</p>
              <p className="pub-desc">Improved frequent pattern mining with O((V)(E)) time complexity</p>
              <div className="pub-links">
                <a href="https://arxiv.org/pdf/1804.10711" target="_blank" rel="noopener noreferrer" className="pub-link">
                  View PDF
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Key Achievements Section */}
        <div className="section" id="achievements">
          <h2 className="section-title">Key Achievements</h2>
          <div className="achievements-list">
            <div className="achievement-item">
              <span className="achievement-icon">🏆</span>
              <div className="achievement-content">
                <h3 className="achievement-title">Best Paper Award</h3>
                <p className="achievement-desc">Association for Computational Linguistics (ACL), Jul 2018</p>
                <p className="achievement-detail">Won the best paper award for "A Systematic Classification of Knowledge, Reasoning, and Context within the ARC Dataset" at MRQA 2018</p>
              </div>
            </div>
            <div className="achievement-item">
              <span className="achievement-icon">🥇</span>
              <div className="achievement-content">
                <h3 className="achievement-title">Special Prize Winners (Top 5 Teams)</h3>
                <p className="achievement-desc">HackerEarth and Harman Hackathon, May 2016</p>
                <p className="achievement-detail">Stood in top 5 teams out of 445 teams comprising of 1300 members</p>
              </div>
            </div>
            <div className="achievement-item">
              <span className="achievement-icon">🎓</span>
              <div className="achievement-content">
                <h3 className="achievement-title">Summer Research Fellowship</h3>
                <p className="achievement-desc">Indian Academy of Sciences, Mar 2016</p>
                <p className="achievement-detail">Selected as Summer Research Fellow for Deep Learning research at Indian Statistical Institute</p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Projects Section */}
        <div className="section" id="projects">
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

        {/* Experience Section */}
        <div className="section" id="experience">
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
