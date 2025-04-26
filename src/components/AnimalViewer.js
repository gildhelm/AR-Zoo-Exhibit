import React from 'react';
import '@google/model-viewer';

function AnimalViewer() {
  return (
    <div className="animal-viewer">
      <h2>Toninha / La Plata dolphin</h2>
      <model-viewer
        src="https://modelviewer.dev/shared-assets/models/Astronaut.glb"
        alt="A 3D model of a La Plata dolphin"
        auto-rotate
        camera-controls
        ar
        style={{ width: '100%', height: '500px' }}
      ></model-viewer>
    </div>
  );
}

export default AnimalViewer;
