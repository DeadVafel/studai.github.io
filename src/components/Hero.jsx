
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="container hero-content">
        <h1 className="hero-title animate-fade-in">StudAI: Ваш интеллектуальный помощник в обучении</h1>
        <p className="hero-subtitle animate-fade-in delay-1">
          Получайте мгновенные ответы, просматривайте лекции и совершенствуйте знания в предпринимательстве.
        </p>
        <a href="#about" className="hero-button animate-fade-in delay-2">Начать обучение</a>
      </div>
    </section>
  );
};

export default Hero;
