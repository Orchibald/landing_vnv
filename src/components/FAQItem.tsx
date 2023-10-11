import React, { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
}

export const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="faq-item">
      <div className="faq-question" onClick={toggleAnswer}>
        {question}
        <div className={`faq-answer ${isOpen ? 'open' : 'closed'}`}>
          {isOpen && <div className="answer-text">{answer}</div>}
        </div>
      </div>
    </div>
  );
};