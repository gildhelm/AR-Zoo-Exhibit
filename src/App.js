import React from 'react';
import './styles/main.css';
import AnimalViewer from './components/AnimalViewer';

function App() {
  return (
    <div className="app-container">
      <header>
        <h1>Bem-vindo ao Zoológico AR! / Welcome to the AR Zoo!</h1>
        <p>Explore animais brasileiros em perigo crítico de extinção.</p>
      </header>
      <main>
        <AnimalViewer />
      </main>
    </div>
  );
}

export default App;
