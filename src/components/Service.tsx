import React, { useState } from 'react'

type NavigationState = 'option1' 
| 'option2' 
| 'option3' 
| 'option4' 
| 'option5' 
| 'option6';

export const Service: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<NavigationState>('option1');

  const handleOptionChange = (option: NavigationState) => {
    setSelectedOption(option);
  };

  return (
    <>
      <div className="main_services-header">
        <button className='main_services_nav-btn' onClick={() => handleOptionChange('option1')}>Option 1</button>
        <button className='main_services_nav-btn' onClick={() => handleOptionChange('option2')}>Option 2</button>
        <button className='main_services_nav-btn' onClick={() => handleOptionChange('option3')}>Option 3</button>
        <button className='main_services_nav-btn' onClick={() => handleOptionChange('option4')}>Option 4</button>
        <button className='main_services_nav-btn' onClick={() => handleOptionChange('option5')}>Option 5</button>
        <button className='main_services_nav-btn' onClick={() => handleOptionChange('option6')}>Option 6</button>
      </div>
      <div className="main_services-content">
        {selectedOption === 'option1' && <ContentOption1 />}
        {selectedOption === 'option2' && <ContentOption2 />}
        {selectedOption === 'option3' && <ContentOption3 />}
        {selectedOption === 'option4' && <ContentOption4 />}
        {selectedOption === 'option5' && <ContentOption5 />}
        {selectedOption === 'option6' && <ContentOption6 />}
      </div>
    </>
  );
}

function ContentOption1() {
  return (
    <>
      <h2>Ідеальний варіант для бізнесу, якому потрібна коротка, але змістовна, презентація</h2>
      <div>
        Завдяки зручності такого формату, можна легко подати користувачу всю важливу інформацію та швидко підвести його до покупки
      </div>
      <h3>Обирайте цей тип сайту, якщо:</h3>
      <ul>
         <li>Ви хочете презентувати власний інфо-продукт, послугу, книгу і т.д.</li>
         <li>У вас невелика кількість продуктів (до 8)</li>
         <li>Вам потрібне коротке портфоліо спеціаліста або сайт-візитка</li>
          <button className='main_services-sub'>BUY</button>
      </ul>
    </>
  );
}

function ContentOption2() {
  return (
    <>
      <h2>Величезне поле для креативу</h2>
      <div>
        Завдяки зручності такого формату, можна легко подати користувачу всю важливу інформацію та швидко підвести його до покупки
      </div>
      <h3>Обирайте цей тип сайту, якщо:</h3>
      <ul>
         <li>Ви хочете презентувати власний інфо-продукт, послугу, книгу і т.д.</li>
         <li>У вас невелика кількість продуктів (до 8)</li>
         <li>Вам потрібне коротке портфоліо спеціаліста або сайт-візитка</li>
          <button className='main_services-sub'>BUY</button>
      </ul>
    </>
  );
}

function ContentOption3() {
  return (
    <>
      <h2>Зручний сайт для бізнесу</h2>
      <div>
        Завдяки зручності такого формату, можна легко подати користувачу всю важливу інформацію та швидко підвести його до покупки
      </div>
      <h3>Обирайте цей тип сайту, якщо:</h3>
      <ul>
         <li>Ви хочете презентувати власний інфо-продукт, послугу, книгу і т.д.</li>
         <li>У вас невелика кількість продуктів (до 8)</li>
         <li>Вам потрібне коротке портфоліо спеціаліста або сайт-візитка</li>
          <button className='main_services-sub'>BUY</button>
      </ul>
    </>
  );
}

function ContentOption4() {
  return (
    <>
      <h2>Детальний аудит вашого сайту по всім можливим параметрам</h2>
      <div>
        Завдяки зручності такого формату, можна легко подати користувачу всю важливу інформацію та швидко підвести його до покупки
      </div>
      <h3>Обирайте цей тип сайту, якщо:</h3>
      <ul>
         <li>Ви хочете презентувати власний інфо-продукт, послугу, книгу і т.д.</li>
         <li>У вас невелика кількість продуктів (до 8)</li>
         <li>Вам потрібне коротке портфоліо спеціаліста або сайт-візитка</li>
          <button className='main_services-sub'>BUY</button>
      </ul>
    </>
  );
}

function ContentOption5() {
  return (
    <>
      <h2>Ідеальний початок для просування вашого бізнесу в інтернеті</h2>
      <div>
        Завдяки зручності такого формату, можна легко подати користувачу всю важливу інформацію та швидко підвести його до покупки
      </div>
      <h3>Обирайте цей тип сайту, якщо:</h3>
      <ul>
         <li>Ви хочете презентувати власний інфо-продукт, послугу, книгу і т.д.</li>
         <li>У вас невелика кількість продуктів (до 8)</li>
         <li>Вам потрібне коротке портфоліо спеціаліста або сайт-візитка</li>
          <button className='main_services-sub'>BUY</button>
      </ul>
    </>
  );
}

function ContentOption6() {
  return (
    <>
      <h2>Ідеальний варіант для бізнесу, якому потрібна коротка, але змістовна, презентація</h2>
      <div>
        Завдяки зручності такого формату, можна легко подати користувачу всю важливу інформацію та швидко підвести його до покупки
      </div>
      <h3>Обирайте цей тип сайту, якщо:</h3>
      <ul>
         <li>Ви хочете презентувати власний інфо-продукт, послугу, книгу і т.д.</li>
         <li>У вас невелика кількість продуктів (до 8)</li>
         <li>Вам потрібне коротке портфоліо спеціаліста або сайт-візитка</li>
          <button className='main_services-sub'>BUY</button>
      </ul>
    </>
  );
}