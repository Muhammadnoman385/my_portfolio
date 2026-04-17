import React, { useState } from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  // Mobile menu ki state
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Menu item click handle karne ke liye function
  const handleNavClick = (page) => {
    setCurrentPage(page);
    setIsMenuOpen(false); // Mobile par click ke baad menu band ho jaye
  };

  return (
    <div className="portfolio-app">
      <style>{`
        .portfolio-app { font-family: 'Segoe UI', sans-serif; margin: 0; background-color: #f8fafc; min-height: 100vh; color: #1e293b; }
        
        /* Navbar Styles */
        .navbar { display: flex; justify-content: space-between; align-items: center; background: #0f172a; padding: 1rem 10%; color: white; position: sticky; top: 0; z-index: 100; }
        .logo { font-size: 1.5rem; font-weight: bold; color: #38bdf8; }
        
        /* Desktop Nav Links */
        .nav-links { display: flex; list-style: none; gap: 25px; margin: 0; align-items: center; }
        .nav-links li { cursor: pointer; transition: 0.3s; }
        .nav-links li:hover, .nav-links li.active { color: #38bdf8; }
        .nav-links a { text-decoration: none; color: inherit; transition: 0.3s; }
        .nav-links a:hover { color: #38bdf8; }

        /* Mobile Menu Button (Hidden by default) */
        .menu-btn { display: none; background: none; border: none; color: white; font-size: 1.8rem; cursor: pointer; }

        /* Content Area */
        .content-area { padding: 40px 10%; }
        .main-card { background: white; padding: 40px; border-radius: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.05); max-width: 900px; margin: 0 auto; }
        .profile-header { display: flex; flex-direction: column; align-items: center; text-align: center; margin-bottom: 40px; }
        .profile-img { width: 150px; height: 150px; border-radius: 50%; object-fit: cover; border: 4px solid #38bdf8; margin-bottom: 15px; }
        
        .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 25px; margin-top: 30px; }
        .card { background: white; padding: 25px; border-radius: 12px; border-left: 5px solid #38bdf8; box-shadow: 0 4px 6px rgba(0,0,0,0.05); }

        /* RESPONSIVE DESIGN */
        @media (max-width: 768px) {
          .navbar { padding: 1rem 5%; }
          .menu-btn { display: block; } /* Show button on mobile */
          
          .nav-links {
            display: ${isMenuOpen ? 'flex' : 'none'}; /* Toggle menu */
            flex-direction: column;
            position: absolute;
            top: 60px;
            left: 0;
            width: 100%;
            background: #0f172a;
            padding: 20px 0;
            gap: 15px;
            text-align: center;
            box-shadow: 0 10px 15px rgba(0,0,0,0.2);
          }
        }

        .fade-in { animation: fadeIn 0.6s ease-out; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>

      <nav className="navbar">
        <div className="logo">MyPortfolio</div>
        
        {/* Mobile Hamburger Button */}
        <button className="menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? '✕' : '☰'}
        </button>

        <ul className="nav-links">
          <li 
            onClick={() => handleNavClick('home')} 
            className={currentPage === 'home' ? 'active' : ''}
          >
            About Me
          </li>
          <li 
            onClick={() => handleNavClick('projects')} 
            className={currentPage === 'projects' ? 'active' : ''}
          >
            Projects
          </li>
          <li 
            onClick={() => handleNavClick('contact')} 
            className={currentPage === 'contact' ? 'active' : ''}
          >
            Contact Me
          </li>
          <li>
            <a href="https://github.com/Muhammadnoman385" target="_blank" rel="noopener noreferrer">
              GitHub Profile
            </a>
          </li>
        </ul>
      </nav>

      <div className="content-area">
        {currentPage === 'home' && (
          <section className="fade-in">
            <div className="main-card">
              <div className="profile-header">
                <img src="/myimage.jpeg" alt="Profile" className="profile-img" />
                <h2>Muhammad Noman</h2>
                <p style={{color: '#64748b', fontSize: '1.1rem'}}>MERN & Full Stack Developer</p>
                <p style={{maxWidth: '600px', textAlign: 'justify', marginTop: '15px'}}>
                  "As a Computer Science graduate and a Full Stack Developer, I specialize in building scalable web applications using the MERN stack..."
                </p>
              </div>
              <div className="info-section">
                <h3>My Mission</h3>
                <p>To write clean, efficient, and maintainable code that solves complex problems...</p>
                <h3 style={{ marginTop: '30px' }}>My Vision</h3>
                <p>To build a future where software is not just functional but also intelligent...</p>
              </div>
            </div>
          </section>
        )}

        {currentPage === 'projects' && (
          <section className="fade-in">
            <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>My Work</h1>
            <div className="grid">
              <div className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <img src="/networking.png" alt="Banking Network" style={{ width: '80%', borderRadius: '8px' }} />
                <h3>Intercity Banking Network</h3>
                <p style={{ textAlign: 'justify' }}>This project simulates a secure Intercity Banking Network architecture using Router-on-a-Stick...</p>
                <a href="https://github.com/Muhammadnoman385/Intercity-Bank-Networking" target="_blank" rel="noopener noreferrer" style={{ marginTop: '15px', padding: '10px 20px', backgroundColor: '#24292e', color: 'white', borderRadius: '5px', textDecoration: 'none' }}>
                  View on GitHub
                </a>
              </div>
            </div>
          </section>
        )}

        {currentPage === 'contact' && (
          <section className="fade-in">
            <h1 style={{textAlign: 'center'}}>Contact Me</h1>
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