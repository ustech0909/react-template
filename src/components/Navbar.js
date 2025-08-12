import React from 'react';


const Navbar = () => {
  React.useEffect(() => {
    const handleClick = (e) => {
      if (e.target.classList.contains('nav-link') && e.target.getAttribute('href').startsWith('#')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').replace('#', '');
        const section = document.getElementById(targetId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#">VEHICULA</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link" href="#home">HOME</a></li>
            <li className="nav-item"><a className="nav-link" href="#services">SERVICES</a></li>
            <li className="nav-item"><a className="nav-link" href="#whatwedo">WHAT WE DO</a></li>
            <li className="nav-item"><a className="nav-link" href="#blog">BLOG</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact">CONTACTS</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};



export default Navbar;
