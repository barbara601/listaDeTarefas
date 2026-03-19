import { createRoot } from 'react-dom/client'
import App from './App.tsx'

const root = document.getElementById('root');

if (root) {
  createRoot(root).render(<App />);
} else {
  throw new Error("Root element not found");
}
