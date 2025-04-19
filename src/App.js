import React from 'react';
import './styles/main.css';
import AnimalViewer from './components/AnimalViewer';

function App() {
  return (
    <div className="app-container">
      <h1>Bem-vindo ao Zoológico AR! / Welcome to the AR Zoo!</h1>
      <AnimalViewer />
    </div>
  );
}

export default App;
