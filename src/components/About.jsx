
import SectionWrapper from './SectionWrapper';
import './About.css';

const About = () => {
  return (
    <SectionWrapper id="about" title="О StudAI">
      <div className="about-content">
        <p>
          <strong>StudAI</strong> - это инновационный лендинг-бот, разработанный специально для студентов,
          изучающих дисциплину <strong>"Практическое предпринимательство"</strong>, а также для преподавателей.
          Наша цель - сделать процесс обучения максимально эффективным и удобным.
        </p>
        <p>
          Мы провели исследование UX/UI, чтобы понять ваши потребности, и создали инструмент, который позволит вам
          легко получать доступ к лекциям, задавать вопросы и получать оперативную обратную связь.
        </p>
        <p className="target-audience">
          <strong>Целевая аудитория:</strong> студенты и преподаватели дисциплины "Практическое предпринимательство".
        </p>
        <div className="about-stats">
          <div className="stat-item animate-hover-pulse">
            <h3>44%</h3>
            <p>Оценили удобство бота в 8 баллов</p>
          </div>
          <div className="stat-item animate-hover-pulse">
            <h3>25+</h3>
            <p>Ответов в нашем UX-исследовании</p>
          </div>
          <div className="stat-item animate-hover-pulse">
            <h3>24/7</h3>
            <p>Доступ к лекциям и ответам</p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
