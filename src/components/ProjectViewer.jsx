import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Suspense } from 'react';
import { Loader2 } from 'lucide-react';

/**
 * ProjectViewer Component
 * 
 * This is the core reusable 3D model viewer used in both the Technology section
 * and the DetailView modal. It uses React Three Fiber + Drei to render GLB models.
 * 
 * Props:
 * - modelPath: string (path to .glb file in /public)
 * - scale: number (size of the model)
 * - position: [x, y, z] (position in 3D space)
 * - cameraPosition: [x, y, z] (where the camera starts)
 * - cameraTarget: [x, y, z] (what the camera looks at)
 * - tilt: [x, y, z] (rotation of the model)
 * - enableZoom: boolean (allow user to zoom with mouse wheel)
 */
export default function ProjectViewer({
  modelPath,
  scale = 0.5,
  position = [0, -1, 0],
  cameraPosition = [0, 9, 13],
  cameraTarget = [0, 3, 0],
  tilt = [0, 0, 0],
  enableZoom = false
}) {
  // Load the 3D model from the given path
  const { scene } = useGLTF(modelPath);

  return (
    <Canvas 
      camera={{ position: cameraPosition, fov: 44 }} 
      style={{ background: '#000000' }}
    >
      {/* Basic lighting setup */}
      <ambientLight intensity={0.8} />
      <directionalLight position={[12, 16, 6]} intensity={1.5} />

      {/* Suspense shows a loading spinner while the model loads */}
      <Suspense fallback={
        <div className="absolute inset-0 flex items-center justify-center z-50">
          <div className="flex flex-col items-center gap-3 text-white">
            <Loader2 className="w-8 h-8 animate-spin text-[#00F0FF]" />
            <p className="text-sm">Loading 3D Model...</p>
          </div>
        </div>
      }>
        {/* Render the actual 3D model with props */}
        <primitive 
          object={scene} 
          scale={scale} 
          position={position} 
          rotation={tilt} 
        />
      </Suspense>

      {/* OrbitControls allow the user to rotate and zoom the model */}
      <OrbitControls 
        autoRotate 
        autoRotateSpeed={0.14} 
        enableZoom={enableZoom} 
        target={cameraTarget} 
      />
    </Canvas>
  );
}