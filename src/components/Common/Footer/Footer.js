import React from 'react';
import './Footer.css';

const Footer = (props) => (
  <footer className="footer">
    Copyright &copy; {props.title}
  </footer>
);

export default Footer;
