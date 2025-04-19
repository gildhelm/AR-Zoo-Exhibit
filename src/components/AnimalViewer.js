import React from 'react';

function AnimalViewer() {
  return (
    <div className="viewer">
      <model-viewer
        src="/assets/toninha-placeholder.glb"
        alt="Toninha 3D"
        auto-rotate
        camera-controls
        ar
        style={{ width: '100%', height: '500px' }}
      ></model-viewer>
    </div>
  );
}

export default AnimalViewer;
