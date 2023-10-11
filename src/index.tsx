import { createRoot } from 'react-dom/client';

import './styles/styles.css'
import { App } from './App';


createRoot(document.getElementById('root') as HTMLDivElement)
  .render(<App />);
