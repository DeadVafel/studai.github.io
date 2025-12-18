
import SectionWrapper from './SectionWrapper';
import './Testimonials.css';

const Testimonials = () => {
  const testimonialsList = [
    {
      quote: "Очень удобный и интуитивно понятный бот! Доступ к лекциям 24/7 - это спасение для занятого студента. Материал стал усваиваться намного легче.",
      author: "Анна, студентка",
      rating: 8
    },
    {
      quote: "Возможность задавать вопросы и получать ответы, как от преподавателя, — это бесценно. StudAI действительно помогает разобраться в сложных темах.",
      author: "Иван, студент",
      rating: 9
    },
    {
      quote: "Я стал лучше понимать материал благодаря StudAI. Простота использования на высоте, и он всегда под рукой. Рекомендую всем!",
      author: "Мария, студентка",
      rating: 10
    },
    {
      quote: "Отличный инструмент для подготовки к занятиям. С ним обучение стало намного продуктивнее, особенно полезны ссылки на конкретные лекции.",
      author: "Дмитрий, студент",
      rating: 7
    },
  ];

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <i key={i} className={`fas fa-star ${i < rating / 2 ? 'filled' : ''}`}></i>
      );
    }
    return <div className="stars">{stars}</div>;
  };

  return (
    <SectionWrapper id="testimonials" title="Что говорят студенты о StudAI?" isDark>
      <div className="testimonials-grid">
        {testimonialsList.map((testimonial, index) => (
          <div key={index} className="testimonial-card animate-fade-in" style={{ animationDelay: `${0.2 * index}s` }}>
            <p className="quote">"{testimonial.quote}"</p>
            <div className="author-info">
              <span className="author-name">{testimonial.author}</span>
              {renderStars(testimonial.rating)}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Testimonials;
