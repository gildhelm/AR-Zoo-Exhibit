import React from 'react';

function AnimalViewer() {
  return (
    <div className="animal-viewer">
      <h2>Mico-leão-dourado / Golden Lion Tamarin</h2>
      <model-viewer
        src="https://modelviewer.dev/shared-assets/models/Astronaut.glb"
        alt="Modelo temporário de teste"
        auto-rotate
        camera-controls
        ar
        style={{ width: '100%', height: '500px' }}
      ></model-viewer>
    </div>
  );
}

export default AnimalViewer;
