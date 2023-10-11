import React from 'react'

type Props = {
  number: number;
};

export const Card: React.FC<Props> = ({ number }: Props) => {
  return (
    <div className="card">
      <h3 className="card__name">Card {number}</h3>
      <p className='card_description'>Lorem ipsum,<br/> dolor sit amet consectetur <br/> adipisicing elit.</p>
    </div>
  );
}