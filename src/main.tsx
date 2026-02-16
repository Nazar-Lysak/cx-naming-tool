import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

export interface WidgetConfig {
  id?: string | null;
  lang?: string | null;
  widget?: string | null;
}

export default App;

const rootElement = document.getElementById('cx-naming-tool-widget');

if (!rootElement) {
  console.error('CX Naming Tool: Element #cx-naming-tool-widget not found');
  throw new Error('Widget container not found');
}

const scriptElement = document.currentScript as HTMLScriptElement;
const config: WidgetConfig = scriptElement ? {...scriptElement} : {...rootElement.dataset};

console.log('Widget configuration:', config);



createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
