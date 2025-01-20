import React from "react";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} ZdamyTo - Wszystkie prawa zastrzeżone</p>
    </footer>
  );
};

export default Footer;
