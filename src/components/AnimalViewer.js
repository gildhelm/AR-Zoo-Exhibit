import React from 'react';
import dolphinModel from '../assets/models/dolphin.glb';

function AnimalViewer() {
  return (
    <model-viewer
      src={dolphinModel}
      alt="A 3D model of a La Plata dolphin"
      auto-rotate
      camera-controls
      ar
      style={{ width: '100%', height: '500px' }}
    ></model-viewer>
  );
}

export default AnimalViewer;
