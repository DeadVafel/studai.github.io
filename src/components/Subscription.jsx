import React, { useState } from 'react';
import SectionWrapper from './SectionWrapper';
import './Forms.css';

const Subscription = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState(''); 

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage('');
    setMessageType('');

    if (!name.trim()) {
      setMessage('Пожалуйста, введите ваше имя.');
      setMessageType('error');
      return;
    }
    if (name.trim().length < 2) {
      setMessage('Имя должно содержать не менее 2 символов.');
      setMessageType('error');
      return;
    }
    if (!email.trim()) {
      setMessage('Пожалуйста, введите ваш Email.');
      setMessageType('error');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setMessage('Пожалуйста, введите корректный Email.');
      setMessageType('error');
      return;
    }

    const subscriptionData = { name, email, timestamp: new Date().toISOString() };
    try {
      localStorage.setItem('studaiSubscription', JSON.stringify(subscriptionData));
      console.log('Подписка сохранена в localStorage:', subscriptionData);
      setMessage('Спасибо за подписку! Мы свяжемся с вами в ближайшее время.');
      setMessageType('success');
      setName('');
      setEmail('');
    } catch (error) {
      console.error('Ошибка при сохранении подписки:', error);
      setMessage('Произошла ошибка при подписке. Попробуйте еще раз.');
      setMessageType('error');
    }
  };

  return (
    <SectionWrapper id="subscription" title="Будьте в курсе обновлений!" subtitle="Подпишитесь на нашу рассылку, чтобы первыми узнавать о новых лекциях и функциях StudAI." isDark>
      <form onSubmit={handleSubmit} className="form-card animate-fade-in">
        <div className="form-group">
          <label htmlFor="sub-name">Имя:</label>
          <input
            type="text"
            id="sub-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            minLength="2"
            placeholder="Ваше имя"
          />
        </div>
        <div className="form-group">
          <label htmlFor="sub-email">Email:</label>
          <input
            type="email"
            id="sub-email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Ваш Email"
          />
        </div>
        <button type="submit">Подписаться</button>
        {message && (
          <div className={`form-message ${messageType}`}>
            {message}
          </div>
        )}
      </form>
    </SectionWrapper>
  );
};

export default Subscription;
