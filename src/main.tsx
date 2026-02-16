import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

export default App;

const cdn = document.currentScript as HTMLScriptElement;
const dcnConfig = { 
  id: cdn?.getAttribute('data-domain-script'), 
  lang: cdn?.getAttribute('data-language') 
};

console.log('CX Naming Tool Widget Config:', dcnConfig);

// Автоматично рендеримо для SPA (standalone/demo)
const rootElement = document.getElementById('cx-naming-tool-widget');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}
