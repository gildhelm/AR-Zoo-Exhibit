import React from 'react';

function AnimalViewer() {
  return (
    <div className="animal-viewer">
      <h2>Mico-leão-dourado / Golden Lion Tamarin</h2>
      <model-viewer
        src="/models/golden-lion-tamarin.glb"
        alt="Modelo 3D do Mico-leão-dourado"
        ar
        ar-modes="scene-viewer webxr quick-look"
        environment-image="neutral"
        auto-rotate
        camera-controls
        style={{ width: '100%', height: '500px' }}
      ></model-viewer>
    </div>
  );
}

export default AnimalViewer;
