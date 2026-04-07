import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Float, Stars, Html } from '@react-three/drei';
import * as THREE from 'three';

function BinaryRain() {
  const count = 25; 
  const columns = useMemo(() => {
    return [...Array(count)].map(() => ({
      x: (Math.random() - 0.5) * 35,
      y: Math.random() * 20,
      z: -15,
      speed: 0.02 + Math.random() * 0.04,
      chars: [...Array(12)].map(() => (Math.random() > 0.5 ? '1' : '0'))
    }));
  }, []);

  return (
    <group>
      {columns.map((col, i) => (
        <BinaryColumn key={i} col={col} />
      ))}
    </group>
  );
}

function BinaryColumn({ col }: { col: any }) {
  const ref = useRef<THREE.Group>(null);
  useFrame(() => {
    if (ref.current) {
        ref.current.position.y -= col.speed;
        if (ref.current.position.y < -15) ref.current.position.y = 15;
    }
  });

  return (
    <group ref={ref} position={[col.x, col.y, col.z]}>
      {col.chars.map((char: string, j: number) => (
        <Html key={j} position={[0, -j * 0.8, 0]} transform occlude={false}>
          <div className="text-[10px] text-cyan-500/10 font-mono select-none">
            {char}
          </div>
        </Html>
      ))}
    </group>
  );
}

function FloatingCode() {
  const snippets = [
    '0x4F2A', 'SYS_INIT', 'AUTH_ENCR', 'LOCAL_HOST',
    'std::cout', 'System.gc()', 'malloc(0)', 'while(1)'
  ];

  const particles = useMemo(() => {
    return snippets.map((text) => ({
      text,
      pos: [(Math.random() - 0.5) * 30, (Math.random() - 0.5) * 20, -10],
      speed: 0.05 + Math.random() * 0.1
    }));
  }, []);

  return (
    <group>
      {particles.map((p, i) => (
        <CodeSnippet key={i} p={p} />
      ))}
    </group>
  );
}

function CodeSnippet({ p }: { p: any }) {
  const ref = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.position.y += Math.sin(state.clock.getElapsedTime() * p.speed) * 0.001;
      ref.current.rotation.y += 0.0005;
    }
  });

  return (
    <group ref={ref} position={p.pos as any}>
      <Html transform occlude={false} distanceFactor={15}>
        <div className="whitespace-nowrap text-[8px] text-cyan-400/5 font-mono select-none">
          {p.text}
        </div>
      </Html>
    </group>
  );
}

export default function CinematicBackground() {
  const [webglError, setWebglError] = React.useState(false);

  if (webglError) return null;

  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none bg-black">
      <Suspense fallback={null}>
        <Canvas 
          camera={{ position: [0, 0, 15], fov: 50 }} 
          dpr={1}
          gl={{ antialias: false, alpha: true }}
          onCreated={({ gl }) => {
            gl.domElement.addEventListener('webglcontextlost', () => setWebglError(true), false);
          }}
          onError={() => setWebglError(true)}
        >
          <color attach="background" args={['#000000']} />
          <Stars radius={150} depth={50} count={3000} factor={4} saturation={0} fade speed={0.5} />
          
          <BinaryRain />
          <FloatingCode />

          <Float speed={1} rotationIntensity={0.2} floatIntensity={0.2}>
             <mesh position={[0, 0, -5]}>
                <octahedronGeometry args={[5, 0]} />
                <meshBasicMaterial color="#00f2ff" wireframe transparent opacity={0.03} />
             </mesh>
          </Float>
        </Canvas>
      </Suspense>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-60" />
    </div>
  );
}
