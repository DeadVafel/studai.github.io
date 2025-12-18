
import './SectionWrapper.css';

const SectionWrapper = ({ id, title, subtitle, children, className = '', isDark = false }) => {
  return (
    <section id={id} className={`section-padding ${isDark ? 'bg-dark-section' : ''} ${className}`}>
      <div className="container animate-fade-in">
        {title && <h2 className="text-center section-title">{title}</h2>}
        {subtitle && <p className="text-center section-subtitle">{subtitle}</p>}
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
