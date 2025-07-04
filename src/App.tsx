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
            <button onClick={() => scrollToSection('projects')} className="nav-link">Key Projects</button>
            <button onClick={() => scrollToSection('speaker')} className="nav-link">Speaker</button>
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
                Hi my name is Pritish Yuvraj, I am a Machine Learning engineer at Meta LLama Team. I lead LLama Multilingual team. 
               </p>
               <p className="description">
                I was part of the Meta LLama LMSYS team which created the online-RL recipe lifted the Elo Score for LLama4 from 1246 to 1417 
                (Yes I know the recipe to give almost 150 ELO Score boost to your model on LMSYS/LMArena.ai). 
                </p>
              <p className="description">
                I have graduated from University of Massachusetts, Amherst with Masters in Machine Learning Research 
                (<a href="https://people.cs.umass.edu/~mccallum/" target="_blank" rel="noopener noreferrer" className="profile-link">Andrew McCallum's lab</a>), 
                before that I did my Bachelors from Bangalore Institute of Technology, Bengaluru. I grew up in Ranchi, Jharkhand. Reach out to me at: pritish.yuvi@gmail.com
              </p>
            </div>
          </div>
        </div>

        {/* News Section */}
        <div className="section">
          <h2 className="section-title">News</h2>
          <div className="news-list">
            <div className="news-item">
              <span className="news-date">[Apr 2025]</span>
              <span className="news-text">LLama 4 models released - the best multilingual model and best LMSYS non-thinking model with ELO Score: 1417</span>
            </div>
            <div className="news-item">
              <span className="news-date">[Dec 2024]</span>
              <span className="news-text">LLama 3.3 released with enhanced capabilities and improved performance</span>
            </div>
            <div className="news-item">
              <span className="news-date">[Sep 2024]</span>
              <span className="news-text">LLama 3.2 launched - revolutionizing edge AI and vision with open, customizable models for mobile devices</span>
            </div>
            <div className="news-item">
              <span className="news-date">[Jul 2024]</span>
              <span className="news-text">LLama 3.1 introduced - our most capable models to date with 405B parameters</span>
            </div>
            <div className="news-item">
              <span className="news-date">[Aug 2024]</span>
              <span className="news-text">Co-authored "The llama 3 herd of models" publication</span>
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

        {/* Key Projects Section */}
        <div className="section" id="projects">
          <h2 className="section-title">Key Projects</h2>
          <div className="projects-list">
            <div className="project-item">
              <div className="project-header">
                <span className="project-icon">🏆</span>
                <div className="project-header-text">
                  <h3 className="project-title">Best Model on LMSYS - LLama4</h3>
                  <p className="project-role">Member of 5-person team</p>
                </div>
              </div>
              <p className="project-desc">
                Used custom online Reinforcement Learning Algorithm to push the LLama Maverick model from Elo Score 1246 to 1417, 
                making it the best non-thinking LMSYS model.
              </p>
              <div className="project-links">
                <a href="https://x.com/lmarena_ai/status/1908601011989782976" 
                   target="_blank" rel="noopener noreferrer" className="project-link">
                  View on Twitter
                </a>
              </div>
            </div>
            
            <div className="project-item">
              <div className="project-header">
                <span className="project-icon">🌍</span>
                <div className="project-header-text">
                  <h3 className="project-title">Multilingual Lead for LLama</h3>
                  <p className="project-role">Lead Multilingual Development</p>
                </div>
              </div>
              <div className="project-content">
                <ol className="project-list">
                  <li>Brought Online Reinforcement Learning techniques to Multilingual to improve Language Match, achieving on average 15% improvements across all LLama supported languages in cross-lingual and mono-lingual tasks
                  These improvements further enhanced DAU (Daily Active Users) for MetaAI</li>
                  <li>Used Direct Preference Optimization and Supervised Fine-tuning to ensure LLama3.1 (8B/70B/405B), LLama3.2 (1B/3B), LLama3.3 (70B), LLama4 (Scout, Maverick, Behemoth) were the best models in multilingual across multiple benchmarks like Multi-IF, MGSM, multilingual MMLU</li>
                  <li>These models outperformed GPT-4o, GPT-4.1, Microsoft Phi-3.5, and other leading competitors</li>
                </ol>
              </div>
            </div>
            
            <div className="project-item">
              <div className="project-header">
                <span className="project-icon">⚙️</span>
                <div className="project-header-text">
                  <h3 className="project-title">Post-Training Team Member</h3>
                  <p className="project-role">Model Training Specialist</p>
                </div>
              </div>
              <p className="project-desc">
                Post-training team member who trained the LLama3.2 (1B/3B), LLama 3.3 (70B) model. Extremely affluent at SFT, 
                DPO, Souping models, model selection and Online RL.
              </p>
            </div>
          </div>
        </div>

        {/* Speaker Section */}
        <div className="section" id="speaker">
          <h2 className="section-title">Speaker</h2>
          <div className="speaker-list">
            <div className="speaker-item">
              <div className="speaker-header">
                <span className="speaker-icon">🎤</span>
                <div className="speaker-header-text">
                  <h3 className="speaker-title">GenAI Summit 2024</h3>
                  <p className="speaker-role">Keynote Speaker</p>
                  <p className="speaker-date">November 2, 2024</p>
                </div>
              </div>
              <p className="speaker-desc">
                Presented "Democratizing AI through LLama" at the GenAI Summit, discussing advancements made in LLama and the 
                importance of multilinguality. The talk was attended by over 200 attendees, highlighting Llama's real-world impact. 
                Covered technical architecture and challenges in building robust multilingual capabilities, including insights on 
                the 1B/3B models launched by our team.
              </p>
              <div className="speaker-links">
                <a href="https://sv2024.genaisummit.ai/session/4209180" 
                   target="_blank" rel="noopener noreferrer" className="speaker-link">
                  View Session
                </a>
                <a href="https://www.linkedin.com/posts/pritishyuvraj_llama-llm-ai-activity-7260185059549196289-Zs4R?utm_source=share&utm_medium=member_desktop&rcm=ACoAABo2zT4BqAPL0htEQ9VVPxy_55WT44NzH4s" 
                   target="_blank" rel="noopener noreferrer" className="speaker-link">
                  LinkedIn Post
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="section" id="experience">
          <h2 className="section-title">Experience</h2>
          <div className="experience-list">
            <div className="experience-item">
              <div className="job-header">
                <img 
                  src="/images/llama_logo_v3.png" 
                  alt="LLama" 
                  className="company-logo"
                />
                <div className="job-header-text">
                  <h3 className="job-title">Machine Learning Engineer</h3>
                  <p className="job-company">Meta - LLama Team</p>
                  <p className="job-date">Feb 2024 - Present</p>
                </div>
              </div>
              <ul className="job-details">
                <li>Lead the LLama multilingual text development for LLama3.1 (8B/70B/405B), LLama3.2 (1B/3B models), LLama3.3 (70B), and LLama4 (Scout, Maverick and Behemoth)</li>
                <li>Part of post-training teams for LLama3.2 and LLama3.3</li>
                <li>Contributed to the development of the most advanced suite of models supporting the entire LLama ecosystem</li>
              </ul>
            </div>
            
            <div className="experience-item">
              <div className="job-header">
                <img 
                  src="/images/instagram_logo.svg" 
                  alt="Instagram" 
                  className="company-logo"
                />
                <div className="job-header-text">
                  <h3 className="job-title">Machine Learning Engineer</h3>
                  <p className="job-company">Meta - Instagram</p>
                  <p className="job-date">Dec 2022 - Jan 2024</p>
                </div>
              </div>
              <ul className="job-details">
                <li>Instagram Broadcast (IGBC): Made the app safe by introducing nudity, porn detection, suicide, and self-injury classifiers</li>
                <li>Built the Bullying & Harassment classifier from scratch using XLM-R base model</li>
                <li>Created User History Embedding Model to capture user interactions for better ranking of sharing contents between users</li>
              </ul>
            </div>
            
            <div className="experience-item">
              <div className="job-header">
                <img 
                  src="/images/messenger_logo.png" 
                  alt="Messenger Kids" 
                  className="company-logo"
                />
                <div className="job-header-text">
                  <h3 className="job-title">Machine Learning Engineer</h3>
                  <p className="job-company">Meta - Messenger/Child-Safety</p>
                  <p className="job-date">July 2019 - Nov 2022</p>
                </div>
              </div>
              <ul className="job-details">
                <li>Led the child safety division with focus on ensuring highest severity reports for kids get actioned by PDO's fastest</li>
                <li>Trained multimodal models for proactive safety monitoring</li>
                <li>Added proactive classifiers for nudity/porn detection and other safety concerns</li>
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
