'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Sparkles, Float, MeshDistortMaterial } from '@react-three/drei';
import { Suspense, useRef } from 'react';
import * as THREE from 'three';

/**
 * Abstract, stylized ribbon — evokes a flowing strand of hair / a
 * salon cape catching light. Deliberately non-literal: cheap to
 * render, reads as luxury motion rather than a literal 3D asset.
 */
function Ribbon() {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!mesh.current) return;
    const t = state.clock.getElapsedTime();
    mesh.current.rotation.x = Math.sin(t * 0.15) * 0.25;
    mesh.current.rotation.y = t * 0.08;
    mesh.current.position.y = Math.sin(t * 0.4) * 0.15;
  });

  return (
    <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.6}>
      <mesh ref={mesh} scale={[2.6, 2.6, 2.6]}>
        <torusKnotGeometry args={[1, 0.28, 220, 32, 2, 3]} />
        <MeshDistortMaterial
          color="#C8A552"
          roughness={0.25}
          metalness={0.85}
          distort={0.18}
          speed={1.4}
          emissive="#3a2c0f"
          emissiveIntensity={0.4}
        />
      </mesh>
    </Float>
  );
}

function CameraDrift() {
  useFrame(({ camera, clock }) => {
    const t = clock.getElapsedTime();
    camera.position.x = Math.sin(t * 0.08) * 0.6;
    camera.position.y = 0.2 + Math.cos(t * 0.06) * 0.2;
    camera.lookAt(0, 0, 0);
  });
  return null;
}

export default function HeroScene() {
  return (
    <Canvas
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      camera={{ position: [0, 0.2, 6.5], fov: 42 }}
    >
      <ambientLight intensity={0.4} />
      <pointLight position={[4, 4, 4]} intensity={80} color="#C8A552" />
      <pointLight position={[-4, -2, -3]} intensity={30} color="#8a6f30" />

      <Suspense fallback={null}>
        <Ribbon />
        <Sparkles count={90} scale={[9, 6, 4]} size={2.4} speed={0.25} color="#C8A552" opacity={0.6} />
      </Suspense>

      <CameraDrift />
    </Canvas>
  );
}
