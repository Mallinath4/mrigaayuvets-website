
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Register PWA Service Worker
serviceWorkerRegistration.register({
  onSuccess: () => {
    console.log('✅ MrigAayuVets PWA: Content cached for offline use.');
  },
  onUpdate: (registration) => {
    console.log('🔄 MrigAayuVets PWA: New version available!');
    // Auto-apply update when new service worker is ready
    if (registration && registration.waiting) {
      registration.waiting.postMessage({ type: 'SKIP_WAITING' });
    }
  },
});
