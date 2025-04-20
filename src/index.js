import App from './App.js';

window.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('ar-viewer');
  if (root) {
    root.innerHTML = App(); // If App is a function returning HTML
  }
});
