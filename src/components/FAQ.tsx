import React from 'react';
import { FAQItem } from './FAQItem';

export const FAQ: React.FC = () => {
  const faqData = [
    {
      question: 'Question 1',
      answer: 'Answer to question 1',
    },
    {
      question: 'Question 2',
      answer: 'Answer to question 2',
    },
    {
      question: 'Question 3',
      answer: 'Answer to question 3',
    },
    {
      question: 'Question 4',
      answer: 'Answer to question 4',
    },
    {
      question: 'Question 5',
      answer: 'Answer to question 5',
    },
  ];

  return (
    <div className='faq_block'>
      <h2 className='headline'>FAQ</h2>
      {faqData.map((item, index) => (
        <FAQItem key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
};