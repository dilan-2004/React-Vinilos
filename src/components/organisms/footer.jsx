import React from 'react';
import '../../styles/organisms/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="cover-container">
        <div className="footer">
          <div className="col l6 s12">
            <h5 className="black-text">Footer Content</h5>
            <p className="black-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container text-lighten-4 left-align">
          © 2025 Copyright Text
          <a className="black-text text-lighten-4 right" href="html/Nosotros.html">Nosotros</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
