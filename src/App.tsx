import React from 'react';
import { Header } from './components/Header';
import { Main } from './components/Main';

export const App: React.FC = () => {
  const itemsWhy: number[] = [1, 2, 3, 4, 5, 6];

  return (
    <div>
      <Header />
      <Main number = {itemsWhy}/>
    </div>
  );
}