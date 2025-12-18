
import SectionWrapper from './SectionWrapper';
import './Features.css';

const Features = () => {
  const featuresList = [
    {
      icon: 'fas fa-book-open',
      title: 'Доступ к лекциям 24/7',
      description: 'Просматривайте полный каталог лекций по "Практическому предпринимательству" в любое удобное время, когда это необходимо для обучения.'
    },
    {
      icon: 'fas fa-lightbulb',
      title: 'Интеллектуальные ответы',
      description: 'Задавайте любые вопросы по темам лекций и получайте точные, развернутые ответы, словно от опытного преподавателя.'
    },
    {
      icon: 'fas fa-link',
      title: 'Персонализированные ссылки',
      description: 'Бот автоматически подберет и предоставит прямую ссылку на видеозапись лекции, соответствующую вашему вопросу или интересу.'
    },
    {
      icon: 'fas fa-comments',
      title: 'Эффективная обратная связь',
      description: 'Получайте своевременную поддержку и консультации по вопросам обучения и функционалу бота.'
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Надежность и качество',
      description: 'Разработка с учетом лучших практик ITIL обеспечивает стабильную работу, безопасность данных и высокий уровень сервиса.'
    },
    {
      icon: 'fas fa-brain',
      title: 'Управление знаниями',
      description: 'Систематизированная база знаний бота улучшает качество ответов и делает его незаменимым помощником в обучении.'
    }
  ];

  return (
    <SectionWrapper id="features" title="Что вы получите со StudAI?" isDark>
      <div className="features-grid">
        {featuresList.map((feature, index) => (
          <div key={index} className="feature-item animate-fade-in" style={{ animationDelay: `${0.2 * index}s` }}>
            <i className={`${feature.icon} feature-icon`}></i>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Features;
