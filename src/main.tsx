import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Експортуємо App для CDN/UMD використання
export default App;

// Автоматично рендеримо для SPA (standalone/demo)
const rootElement = document.getElementById('cx-naming-tool-widget');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}
