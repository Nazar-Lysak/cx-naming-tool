import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import ErrorBoundary from '@/client/components/error-boundary/ErrorBoundary';

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

function getAllScriptDataAttrs(script: HTMLScriptElement) {
  const attrs: Record<string, string> = {};
  Array.from(script.attributes).forEach((attr) => {
    if (attr.name.startsWith('data-')) {
      const key = attr.name
        .replace('data-', '')
        .replace(/-([a-z])/g, (_, c) => c.toUpperCase());
      attrs[key] = attr.value;
    }
  });
  return attrs;
}

const config = scriptElement
  ? getAllScriptDataAttrs(scriptElement)
  : { ...rootElement.dataset };

if (!config.id) {
  console.warn('CX Naming Tool: No "id" provided in data attributes');
  throw new Error('Widget ID is required');
}

createRoot(rootElement).render(
  <StrictMode>
    <ErrorBoundary>
      <App config={config} />
    </ErrorBoundary>
  </StrictMode>
);
