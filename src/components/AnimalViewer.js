import React from 'react';
import '@google/model-viewer';

function AnimalViewer() {
  return (
    <div className="animal-viewer">
      <h2>Toninha / La Plata dolphin</h2>
      <model-viewer
        src="/assets/models/dolphin.glb"
        alt="La Plata dolphin 3D Model"
        auto-rotate
        camera-controls
        ar
        style={{ width: '100%', height: '500px' }}
      ></model-viewer>
    </div>
  );
}

export default AnimalViewer;
