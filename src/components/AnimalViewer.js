import React from 'react';
import '@google/model-viewer';

function AnimalViewer() {
  return (
    <model-viewer
      src="/assets/models/dolphin.glb"
      alt="A 3D model of a La Plata dolphin"
      auto-rotate
      camera-controls
      ar
      style={{ width: '100%', height: '500px' }}
    ></model-viewer>
  );
}

export default AnimalViewer;
