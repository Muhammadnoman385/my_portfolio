import React, { useState } from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="portfolio-app">
      <style>{`
        .portfolio-app { font-family: 'Segoe UI', sans-serif; margin: 0; background-color: #f8fafc; min-height: 100vh; color: #1e293b; }
        .navbar { display: flex; justify-content: space-between; align-items: center; background: #0f172a; padding: 1rem 10%; color: white; position: sticky; top: 0; z-index: 100; }
        .logo { font-size: 1.5rem; font-weight: bold; color: #38bdf8; }
        .nav-links { display: flex; list-style: none; gap: 25px; margin: 0; }
        .nav-links li { cursor: pointer; transition: 0.3s; }
        .nav-links li:hover, .nav-links li.active { color: #38bdf8; }

        .content-area { padding: 40px 10%; }
        
        /* About Me & Extra Sections */
        .main-card { background: white; padding: 40px; border-radius: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.05); max-width: 900px; margin: 0 auto; }
        .profile-header { display: flex; flex-direction: column; align-items: center; text-align: center; margin-bottom: 40px; }
        .profile-img { width: 150px; height: 150px; border-radius: 50%; object-fit: cover; border: 4px solid #38bdf8; margin-bottom: 15px; }
        
        .info-section { text-align: left; margin-top: 30px; border-top: 1px solid #e2e8f0; padding-top: 25px; }
        .info-section h3 { color: #0284c7; margin-bottom: 15px; display: flex; align-items: center; gap: 10px; }
        .info-list { list-style: none; padding: 0; }
        .info-list li { margin-bottom: 12px; padding-left: 15px; border-left: 3px solid #38bdf8; }
        .info-list b { color: #0f172a; }

        .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 25px; margin-top: 30px; }
        .card { background: white; padding: 25px; border-radius: 12px; border-left: 5px solid #38bdf8; box-shadow: 0 4px 6px rgba(0,0,0,0.05); }
        
        .contact-form { max-width: 500px; margin: 0 auto; display: flex; flex-direction: column; gap: 15px; background: white; padding: 30px; border-radius: 15px; box-shadow: 0 10px 15px rgba(0,0,0,0.1); }
        .contact-form input, .contact-form textarea { padding: 12px; border: 1px solid #cbd5e1; border-radius: 8px; }
        .send-btn { background: #0284c7; color: white; border: none; padding: 14px; border-radius: 8px; cursor: pointer; font-weight: bold; }
        
        .simple-footer { text-align: center; padding: 30px; background: #f1f5f9; margin-top: 40px; }
        .fade-in { animation: fadeIn 0.6s ease-out; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>

      <nav className="navbar">
        <div className="logo">MyPortfolio</div>
        <ul className="nav-links">
          <li onClick={() => setCurrentPage('home')} className={currentPage === 'home' ? 'active' : ''}>About</li>
          <li onClick={() => setCurrentPage('projects')} className={currentPage === 'projects' ? 'active' : ''}>Projects</li>
          <li onClick={() => setCurrentPage('contact')} className={currentPage === 'contact' ? 'active' : ''}>Contact Me</li>
        </ul>
      </nav>

      <div className="content-area">
        {currentPage === 'home' && (
          <section className="fade-in">
            <div className="main-card">
              <div className="profile-header">
                <img src="/myimage.jpeg" alt="Profile" className="profile-img" />
                <h2>Muhammad Noman</h2>
                <p style={{color: '#64748b', fontSize: '1.1rem'}}>  MERN & Full Stack Developer</p>
                <p style={{maxWidth: '600px',textAlign: 'justify' ,marginTop: '15px'}}>
                "As a Computer Science graduate and a Full Stack Developer, I specialize in building scalable web applications using the MERN stack. Beyond traditional development, I am proficient in integrating AI models and Large Language Models (LLMs) to create intelligent, data-driven solutions. With a deep mastery of Database Management Systems (SQL Server, MySQL, MongoDB) and experience in frontend technologies, I focus on architecting efficient backend logic and seamless user experiences. I am a quick learner and a problem-solver, eager to contribute my technical skills to building high-performance, AI-powered applications."</p>
              </div>

            <div className="mission-container">
<div className="portfolio-wrapper">
  <div className="info-section">
    <h3 className="section-title">My Mission</h3>
    <p style={{ maxWidth: '600px', textAlign: 'justify', marginTop: '15px' }}>
      To write clean, efficient, and maintainable code that solves complex problems and creates seamless digital experiences through the MERN stack and optimized databases.
    </p>

    <h3 className="section-title" style={{ marginTop: '30px' }}>My Vision</h3>
    <p style={{ maxWidth: '600px', textAlign: 'justify', marginTop: '15px' }}>
      To build a future where software is not just functional but also intelligent, reliable, and capable of scaling to meet the world’s growing digital demands.
    </p>
  </div>
</div>
</div>
              

              {/* Education Section */}
             
            </div>
          </section>
        )}

        {currentPage === 'projects' && (
          <section className="fade-in">
            <h1 style={{textAlign: 'center'}}>My Work</h1>
            <div className="grid">
              <div className="card">
                <h3>School Management</h3>
                <p>Database normalization ke saath banaya gaya system.</p>
              </div>
              <div className="card">
                <h3>Inventory System</h3>
                <p>SQL queries aur React interface ka combination.</p>
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

      <footer className="simple-footer">
        <p>© 2026 | M.Noman </p>
      </footer>
    </div>
  );
}

export default App;