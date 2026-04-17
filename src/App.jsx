import React, { useState } from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (page) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
  };

  return (
    <div className="portfolio-app">
      <style>{`
        .portfolio-app { font-family: 'Segoe UI', sans-serif; margin: 0; background-color: #f8fafc; min-height: 100vh; color: #1e293b; display: flex; flex-direction: column; }
        
        /* Navbar */
        .navbar { display: flex; justify-content: space-between; align-items: center; background: #0f172a; padding: 1rem 10%; color: white; position: sticky; top: 0; z-index: 100; }
        .logo { font-size: 1.5rem; font-weight: bold; color: #38bdf8; }
        .nav-links { display: flex; list-style: none; gap: 25px; margin: 0; align-items: center; }
        .nav-links li { cursor: pointer; transition: 0.3s; }
        .nav-links li:hover, .nav-links li.active { color: #38bdf8; }
        .nav-links a { text-decoration: none; color: inherit; }

        .menu-btn { display: none; background: none; border: none; color: white; font-size: 1.8rem; cursor: pointer; }

        /* Content Area */
        .content-area { padding: 40px 10%; flex: 1; }
        
        /* Container Styling - Uniform Centering */
        .card-container { 
          background: white; 
          padding: 40px; 
          border-radius: 20px; 
          box-shadow: 0 4px 15px rgba(0,0,0,0.05); 
          max-width: 900px; 
          margin: 0 auto 30px auto; 
          display: flex;
          flex-direction: column;
          align-items: center; /* Horizontally center everything inside */
          text-align: center;   /* Center text for all headings and p */
        }

        .profile-img { width: 150px; height: 150px; border-radius: 50%; object-fit: cover; border: 4px solid #38bdf8; margin-bottom: 20px; }
        
        /* Typography */
        h2 { font-size: 1.8rem; margin: 10px 0; }
        h3 { color: #0284c7; margin: 20px 0 10px 0; font-size: 1.4rem; font-weight: 600; }
        p { 
          max-width: 700px; 
          line-height: 1.7; 
          color: #475569; 
          font-size: 1.05rem; 
          margin: 0 auto 15px auto; 
        }

        /* Projects Grid */
        .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 25px; margin-top: 30px; width: 100%; max-width: 1000px; margin-left: auto; margin-right: auto; }
        .project-card { background: white; padding: 25px; border-radius: 12px; border-left: 5px solid #38bdf8; box-shadow: 0 4px 6px rgba(0,0,0,0.05); display: flex; flex-direction: column; align-items: center; text-align: center; }
        .project-card img { width: 100%; max-height: 200px; object-fit: contain; margin-bottom: 15px; background: #f1f5f9; padding: 5px; border-radius: 8px; }

        /* Forms */
        .contact-form { max-width: 500px; width: 100%; margin: 0 auto; display: flex; flex-direction: column; gap: 15px; background: white; padding: 30px; border-radius: 15px; box-shadow: 0 10px 15px rgba(0,0,0,0.1); }
        .contact-form input, .contact-form textarea { padding: 12px; border: 1px solid #cbd5e1; border-radius: 8px; outline: none; font-family: inherit; }
        
        .send-btn { background: #0284c7; color: white; border: none; padding: 12px 24px; border-radius: 8px; cursor: pointer; font-weight: bold; transition: 0.3s; display: inline-block; text-decoration: none; margin-top: 10px; }
        .send-btn:hover { background: #0369a1; transform: translateY(-2px); }

        /* Mobile */
        @media (max-width: 768px) {
          .navbar { padding: 1rem 5%; }
          .menu-btn { display: block; }
          .nav-links {
            display: ${isMenuOpen ? 'flex' : 'none'};
            flex-direction: column;
            position: absolute;
            top: 60px; left: 0; width: 100%;
            background: #0f172a; padding: 20px 0; gap: 15px;
          }
          .card-container { padding: 30px 20px; }
        }

        .fade-in { animation: fadeIn 0.6s ease-out; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>

      <nav className="navbar">
        <div className="logo">MyPortfolio</div>
        <button className="menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? '✕' : '☰'}
        </button>
        <ul className="nav-links">
          <li onClick={() => handleNavClick('home')} className={currentPage === 'home' ? 'active' : ''}>About Me</li>
          <li onClick={() => handleNavClick('projects')} className={currentPage === 'projects' ? 'active' : ''}>Projects</li>
          <li onClick={() => handleNavClick('contact')} className={currentPage === 'contact' ? 'active' : ''}>Contact Me</li>
          <li><a href="https://github.com/Muhammadnoman385" target="_blank" rel="noopener noreferrer">GitHub</a></li>
        </ul>
      </nav>

      <div className="content-area">
        {currentPage === 'home' && (
          <div className="fade-in">
            {/* Pehla Card: About Me */}
            <section className="card-container">
              <img src="/myimage.jpeg" alt="Profile" className="profile-img" />
              <h2>Muhammad Noman</h2>
              <p style={{color: '#64748b', fontSize: '1.1rem', fontWeight: '500'}}>MERN & Full Stack Developer</p>
              <p>
                "As a Computer Science graduate and a Full Stack Developer, I specialize in building scalable web applications using the MERN stack. Beyond traditional development, I am proficient in integrating AI models and Large Language Models (LLMs) to create intelligent, data-driven solutions."
              </p>
            </section>

            {/* Dusra Card: Mission & Vision */}
            <section className="card-container">
              <h3>My Mission</h3>
              <p>
                To write clean, efficient, and maintainable code that solves complex problems and creates seamless digital experiences through the MERN stack and optimized databases.
              </p>

              <h3>My Vision</h3>
              <p>
                To build a future where software is not just functional but also intelligent, reliable, and capable of scaling to meet the world’s growing digital demands.
              </p>
            </section>
          </div>
        )}

        {currentPage === 'projects' && (
          <section className="fade-in">
            <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>My Work</h1>
            <div className="grid">
              <div className="project-card">
                <img src="/networking.png" alt="Banking Network" />
                <h3>Intercity Banking Network</h3>
                <p style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '15px' }}>
                  A secure banking architecture using Router-on-a-Stick simulation.
                </p>
                <a href="https://github.com/Muhammadnoman385/Intercity-Bank-Networking" target="_blank" rel="noopener noreferrer" className="send-btn">View on GitHub</a>
              </div>
              
              <div className="project-card">
                <img src="/images/inventory-project.jpg" alt="Inventory System" />
                <h3>Inventory System</h3>
                <p style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '15px' }}>
                  An automated management system built with React and SQL Server.
                </p>
                <button className="send-btn">Coming Soon</button>
              </div>
            </div>
          </section>
        )}

        {currentPage === 'contact' && (
          <section className="fade-in">
            <h1 style={{textAlign: 'center', marginBottom: '1.5rem'}}>Contact Me</h1>
            <div className="contact-form">
              <input type="text" placeholder="Aapka Naam" />
              <input type="email" placeholder="Email Address" />
              <textarea placeholder="Aapka Message" rows="5"></textarea>
              <button className="send-btn">Send Message</button>
            </div>
          </section>
        )}
      </div>

      <footer style={{ textAlign: 'center', padding: '30px', background: '#f1f5f9' }}>
        <p>© 2026 | M.Noman </p>
      </footer>
    </div>
  );
}

export default App;