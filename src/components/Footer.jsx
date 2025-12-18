
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-dark">
      <div className="container text-center">
        <p>&copy; {new Date().getFullYear()} Петросян А.С., группа РИМ-150960. Колчанов К.В., группа РИМ-150961</p>
        <div className="social-links">
          <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
          <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
          <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
