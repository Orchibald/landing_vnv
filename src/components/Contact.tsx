import React, { useState } from 'react';

type ContactMethod = 'email' | 'telegram' | 'whatsapp' | 'viber';

interface FormData {
  name: string;
  email: string;
  telegram: string;
  whatsapp: string;
  viber: string;
  message: string;
}

export const Contact: React.FC = () => {
  const [contactMethod, setContactMethod] = useState<ContactMethod>('email');
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    telegram: '',
    whatsapp: '',
    viber: '',
    message: '',
  });

  const handleContactMethodChange = (method: ContactMethod) => {
    setContactMethod(method);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <div className="contact-container">
      <h2 className="contact-headline">Contact Us</h2>
      <div className="contact-form">
        <div className="contact-methods">
          <button
            className={`contact-method-button ${contactMethod === 'email' ? 'active' : ''}`}
            onClick={() => handleContactMethodChange('email')}
          >
            Email
          </button>
          <button
            className={`contact-method-button ${contactMethod === 'telegram' ? 'active' : ''}`}
            onClick={() => handleContactMethodChange('telegram')}
          >
            Telegram
          </button>
          <button
            className={`contact-method-button ${contactMethod === 'whatsapp' ? 'active' : ''}`}
            onClick={() => handleContactMethodChange('whatsapp')}
          >
            WhatsApp
          </button>
          <button
            className={`contact-method-button ${contactMethod === 'viber' ? 'active' : ''}`}
            onClick={() => handleContactMethodChange('viber')}
          >
            Viber
          </button>
        </div>
        <div className="contact-details">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="text"
            name={contactMethod === 'email' ? 'email' : 'telegram'}
            placeholder={contactMethod === 'email' ? 'Email' : 'Username'}
            value={formData[contactMethod === 'email' ? 'email' : 'telegram']}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
          />
          <button className="submit-button">Submit</button>
        </div>
      </div>
    </div>
    </>
  );
};
