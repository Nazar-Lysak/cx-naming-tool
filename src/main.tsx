import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

export interface WidgetConfig {
  id?: string | null;
  lang?: string | null;
}

export default App;

const rootElement = document.getElementById('cx-naming-tool-widget');

if (!rootElement) {
  console.error('CX Naming Tool: Element #cx-naming-tool-widget not found');
  throw new Error('Widget container not found');
}

const scriptElement = document.currentScript as HTMLScriptElement;
const dataAttributes = rootElement.dataset;

// CDN version: read from script tag
const cdnConfig: WidgetConfig = {
  id: scriptElement?.getAttribute('data-domain-script'),
  lang: scriptElement?.getAttribute('data-language')
};

// Standalone version: read from div data-attributes
const standaloneConfig: WidgetConfig = {
  id: dataAttributes.domainScript || dataAttributes.id,
  lang: dataAttributes.language || dataAttributes.lang
};

const isCDN = !!(cdnConfig.id || cdnConfig.lang);
const config = isCDN ? cdnConfig : standaloneConfig;

console.log('Mode:', isCDN ? 'CDN version' : 'Standalone version');
console.log('Config:', config);

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
