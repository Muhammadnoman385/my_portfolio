import React, { useState, useEffect } from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [scrollWidth, setScrollWidth] = useState(0);

  // Typing Effect Logic
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);
  const fullText = "MERN & Full Stack Developer";

  useEffect(() => {
    setIndex(0);
    setDisplayText('');
  }, [currentPage]);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + fullText.charAt(index));
        setIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [index, currentPage]);

  // Scroll Progress Logic
  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollWidth(scrolled);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
  };

  return (
    <div className={`portfolio-app ${isDarkMode ? 'dark-theme' : ''}`}>
      <style>{`
        .portfolio-app { font-family: 'Segoe UI', sans-serif; margin: 0; background-color: #f8fafc; min-height: 100vh; color: #1e293b; display: flex; flex-direction: column; transition: 0.3s; }
        .dark-theme { background-color: #0f172a; color: #f1f5f9; }
        .dark-theme .card-container, .dark-theme .project-card, .dark-theme .contact-form { background-color: #1e293b; color: #f1f5f9; box-shadow: 0 4px 15px rgba(0,0,0,0.3); }
        .dark-theme .skill-badge { background: #334155; color: #38bdf8; border-color: #475569; }
        .dark-theme p { color: #cbd5e1; }
        .dark-theme .contact-form input, .dark-theme .contact-form textarea { background: #334155; color: white; border-color: #475569; }

        .progress-container { position: fixed; top: 0; z-index: 1000; width: 100%; height: 4px; background: transparent; }
        .progress-bar { height: 4px; background: #38bdf8; width: ${scrollWidth}%; }

        .navbar { display: flex; justify-content: space-between; align-items: center; background: #0f172a; padding: 1rem 10%; color: white; position: sticky; top: 0; z-index: 100; }
        .logo { font-size: 1.5rem; font-weight: bold; color: #38bdf8; }
        .nav-links { display: flex; list-style: none; gap: 25px; margin: 0; align-items: center; }
        .nav-links li { cursor: pointer; transition: 0.3s; font-weight: 500; }
        .nav-links li:hover, .nav-links li.active { color: #38bdf8; }
        .nav-links a { text-decoration: none; color: inherit; }

        .theme-toggle { background: #334155; border: none; color: white; padding: 5px 12px; border-radius: 20px; cursor: pointer; font-size: 0.8rem; transition: 0.3s; }
        .menu-btn { display: none; background: none; border: none; color: white; font-size: 1.5rem; cursor: pointer; }

        .content-area { padding: 40px 10%; flex: 1; }
        .card-container { background: white; padding: 40px; border-radius: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.05); max-width: 900px; margin: 0 auto 30px auto; display: flex; flex-direction: column; align-items: center; text-align: center; transition: 0.3s; }
        
        .profile-img { width: 150px; height: 150px; border-radius: 50%; object-fit: cover; border: 4px solid #38bdf8; margin-bottom: 20px; }
        .typing-text { color: #38bdf8; font-size: 1.2rem; font-weight: bold; border-right: 3px solid #38bdf8; animation: blink 0.7s infinite; padding-right: 5px; min-height: 1.5rem; }
        @keyframes blink { 0%, 100% { border-color: transparent } 50% { border-color: #38bdf8 } }

        .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 25px; width: 100%; max-width: 1000px; margin: 20px auto; }
        .project-card { background: white; padding: 25px; border-radius: 12px; border-left: 5px solid #38bdf8; box-shadow: 0 4px 6px rgba(0,0,0,0.05); display: flex; flex-direction: column; align-items: center; text-align: center; transition: 0.3s; }
        .project-card img { width: 100%; max-height: 180px; object-fit: contain; margin-bottom: 15px; background: #f1f5f9; padding: 5px; border-radius: 8px; }

        .skill-badge { background: #f1f5f9; color: #0284c7; padding: 10px; border-radius: 8px; font-weight: 600; border: 1px solid #e2e8f0; transition: 0.3s; }
        .skill-badge:hover { background: #38bdf8; color: white; transform: translateY(-3px); }

        .contact-form { width: 100%; display: flex; flex-direction: column; gap: 15px; }
        .contact-form input, .contact-form textarea { padding: 12px; border: 1px solid #cbd5e1; border-radius: 8px; outline: none; font-family: inherit; width: 100%; box-sizing: border-box; }
        
        .send-btn { background: #0284c7; color: white; border: none; padding: 12px 24px; border-radius: 8px; cursor: pointer; font-weight: bold; text-decoration: none; display: inline-block; transition: 0.3s; margin-top: 10px; }
        .send-btn:hover { background: #0369a1; transform: translateY(-2px); }

        @media (max-width: 768px) {
          .navbar { padding: 1rem 5%; }
          .menu-btn { display: block; }
          .nav-links { display: ${isMenuOpen ? 'flex' : 'none'}; flex-direction: column; position: absolute; top: 60px; left: 0; width: 100%; background: #0f172a; padding: 20px 0; }
        }
        .fade-in { animation: fadeIn 0.6s ease-out; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>

      <div className="progress-container">
        <div className="progress-bar"></div>
      </div>

      <nav className="navbar">
        <div className="logo"> My Portfolio</div>
        <button className="menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>☰</button>
        <ul className="nav-links">
          <li onClick={() => handleNavClick('home')} className={currentPage === 'home' ? 'active' : ''}>About Me</li>
          <li onClick={() => handleNavClick('projects')} className={currentPage === 'projects' ? 'active' : ''}>Projects</li>
          <li onClick={() => handleNavClick('contact')} className={currentPage === 'contact' ? 'active' : ''}>Contact</li>
          <li><a href="https://github.com/Muhammadnoman385" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li>
            <button className="theme-toggle" onClick={() => setIsDarkMode(!isDarkMode)}>
              {isDarkMode ? '☀️ Light' : '🌙 Dark'}
            </button>
          </li>
        </ul>
      </nav>

      <div className="content-area">
        {currentPage === 'home' && (
          <div className="fade-in">
            <section className="card-container">
              <img src="/myimage.jpeg" alt="Profile" className="profile-img" />
              <h2>Muhammad Noman</h2>
              <div className="typing-text">{displayText}</div>
              <p style={{maxWidth: '700px', textAlign: 'center', marginTop: '15px', lineHeight: '1.6'}}>
                "As a Computer Science graduate and a Full Stack Developer, I specialize in building scalable web applications using the MERN stack. Beyond traditional development, I am proficient in integrating AI models and Large Language Models (LLMs) to create intelligent, data-driven solutions."
              </p>
            </section>

            <section className="card-container">
              <h3>Technical Skills</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '15px', width: '100%', marginTop: '10px' }}>
                <div className="skill-badge">MongoDB</div>
                <div className="skill-badge">Express.js</div>
                <div className="skill-badge">React.js</div>
                <div className="skill-badge">Node.js</div>
                <div className="skill-badge">SQL Server</div>
                <div className="skill-badge">REST APIs</div>
              </div>
            </section>

            <section className="card-container">
              <h3>My Mission</h3>
              <p>To write clean, efficient, and maintainable code that solves complex problems and creates seamless digital experiences through the MERN stack and optimized databases.</p>
              <h3>My Vision</h3>
              <p>To build a future where software is not just functional but also intelligent, reliable, and capable of scaling to meet the world’s growing digital demands.</p>
            </section>
          </div>
        )}

        {currentPage === 'projects' && (
          <div className="fade-in">
            <h1 style={{textAlign: 'center', marginBottom: '20px'}}>My Projects</h1>
            <div className="grid">
              <div className="project-card">
                <img src="/networking.png" alt="Banking Network" />
                <h3>Intercity Banking Network</h3>
                <p>A secure banking architecture using Router-on-a-Stick simulation for efficient intercity data routing.</p>
                <a href="https://github.com/Muhammadnoman385/Intercity-Bank-Networking" target="_blank" rel="noopener noreferrer" className="send-btn">View Code</a>
              </div>
              <div className="project-card">
                <img src="photo.png" alt="Inventory System" />
                <h3>Automated Certificate Generator</h3>
                <p>This is a Python-based automation tool that generates professional certificates in bulk using data from a CSV or Worksheet file.
                   Features:
Bulk Processing: Generates multiple certificates in seconds.
Dual-Field Support: Handles both Name and Department fields.
Custom Positioning: Precise text placement on professional templates.
Data-Driven: Easily update records via data.csv.
Language: Python
Libraries: Pandas, Pillow (PIL)



                </p>
              <a href="https://github.com/Muhammadnoman385/python-cert-gen" target="_blank" rel="noopener noreferrer" className="send-btn">View Code</a>
              </div>
            </div>
          </div>
        )}

        {currentPage === 'contact' && (
          <div className="fade-in">
            <h1 style={{textAlign: 'center', marginBottom: '30px'}}>Contact Me</h1>
            <div className="card-container" style={{maxWidth: '600px'}}>
              <div className="contact-form">
                <h3 style={{marginTop: '0'}}>Get In Touch</h3>
                <input type="text" placeholder="Your Name" />
                <input type="email" placeholder="Your Email" />
                <textarea placeholder="Your Message" rows="5"></textarea>
                <button className="send-btn" style={{width: '100%'}}>Send Message</button>
              </div>
            </div>
          </div>
        )}
      </div>

      <footer style={{ textAlign: 'center', padding: '30px', background: isDarkMode ? '#1e293b' : '#f1f5f9' }}>
        <p>© 2026 | M.Noman </p>
      </footer>
    </div>
  );
}

export default App;