import React, { useState } from 'react';
import SectionWrapper from './SectionWrapper';
import './Forms.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessageText] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [messageType, setMessageType] = useState(''); 

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormMessage('');
    setMessageType('');

    if (!name.trim()) {
      setFormMessage('Пожалуйста, введите ваше имя.');
      setMessageType('error');
      return;
    }
    if (name.trim().length < 2) {
      setFormMessage('Имя должно содержать не менее 2 символов.');
      setMessageType('error');
      return;
    }
    if (!email.trim()) {
      setFormMessage('Пожалуйста, введите ваш Email.');
      setMessageType('error');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setFormMessage('Пожалуйста, введите корректный Email.');
      setMessageType('error');
      return;
    }
    if (!message.trim()) {
      setFormMessage('Пожалуйста, введите ваше сообщение.');
      setMessageType('error');
      return;
    }
    if (message.trim().length < 10) {
      setFormMessage('Сообщение должно содержать не менее 10 символов.');
      setMessageType('error');
      return;
    }

    const formData = { name, email, message, timestamp: new Date().toISOString() };
    alert(`Сообщение отправлено:\nИмя: ${formData.name}\nEmail: ${formData.email}\nСообщение: ${formData.message}`);

    const existingMessages = JSON.parse(localStorage.getItem('studaiContactMessages') || '[]');
    localStorage.setItem('studaiContactMessages', JSON.stringify([...existingMessages, formData]));
    console.log('Сообщение сохранено в localStorage:', formData);

    setFormMessage('Ваше сообщение успешно отправлено! Мы свяжемся с вами в ближайшее время.');
    setMessageType('success');
    setName('');
    setEmail('');
    setMessageText('');
  };

  return (
    <SectionWrapper id="contact" title="Свяжитесь с нами" subtitle="Есть вопросы или предложения? Напишите нам!">
      <form onSubmit={handleSubmit} className="form-card animate-fade-in">
        <div className="form-group">
          <label htmlFor="contact-name">Имя:</label>
          <input
            type="text"
            id="contact-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            minLength="2"
            placeholder="Ваше имя"
          />
        </div>
        <div className="form-group">
          <label htmlFor="contact-email">Email:</label>
          <input
            type="email"
            id="contact-email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Ваш Email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="contact-message">Сообщение:</label>
          <textarea
            id="contact-message"
            rows="5"
            value={message}
            onChange={(e) => setMessageText(e.target.value)}
            required
            minLength="10"
            placeholder="Ваше сообщение"
          ></textarea>
        </div>
        <button type="submit">Отправить сообщение</button>
        {formMessage && (
          <div className={`form-message ${messageType}`}>
            {formMessage}
          </div>
        )}
      </form>
    </SectionWrapper>
  );
};

export default Contact;
