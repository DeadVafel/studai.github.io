import SectionWrapper from './SectionWrapper';
import './HowItWorks.css';
import botStart from '../components/assets/images/placeholder-bot-start.jpg';
import botCatalog from '../components/assets/images/placeholder-bot-catalog.jpg';
import botQuestionAnswer from '../components/assets/images/placeholder-bot-question-answer.jpg';

const HowItWorks = () => {
  const steps = [
    {
      image: botStart,
      title: 'Шаг 1: Приветствие и выбор',
      description: 'Пользователь видит стартовый экран StudAI, где может ознакомиться с основными функциями и выбрать желаемую опцию, например, просмотр каталога или задать вопрос.'
    },
    {
      image: botCatalog,
      title: 'Шаг 2: Каталог лекций',
      description: 'Легко просматривайте полный список доступных лекций по "Практическому предпринимательству" с их названиями и кратким описанием. Выберите интересующую вас тему.'
    },
    {
      image: botQuestionAnswer,
      title: 'Шаг 3: Задайте вопрос и получите ответ',
      description: 'Введите свой вопрос в специальное поле. StudAI проанализирует его и предоставит быстрый, точный ответ, а также ссылку на соответствующую лекцию, если вопрос связан с темой.'
    }
  ];

  return (
    <SectionWrapper id="howitworks" title="Как это работает?">
      <div className="how-it-works-steps">
        {steps.map((step, index) => (
          <div key={index} className={`step-item animate-fade-in ${index % 2 === 1 ? 'reverse' : ''}`} style={{ animationDelay: `${0.3 * index}s` }}>
            <div className="step-image-wrapper">
              <img src={step.image} alt={step.title} className="step-image" />
            </div>
            <div className="step-content">
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default HowItWorks;
