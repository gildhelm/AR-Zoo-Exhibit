import React from 'react';

function AnimalViewer() {
  return (
    <div className="animal-viewer">
      <h2>Toninha / La Plata dolphin</h2>
      <model-viewer
        src="/models/dolphin.glb"
        alt="Modelo 3D da toninha"
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
