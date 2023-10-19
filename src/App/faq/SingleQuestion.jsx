import { useState } from 'react';

export function SingleQuestion({ answer, question }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq-item">
      <div onClick={() => setIsOpen(!isOpen)} className="faq-item-header">
        <img src="/toggle-arrow.svg" alt="arr" />
        <h2 className="faq-item-title">{question}</h2>
      </div>

      {isOpen && <p className="faq-item-text">{answer}</p>}
    </div>
  );
}
