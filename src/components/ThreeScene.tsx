import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Float, Stars, Html } from '@react-three/drei';
import * as THREE from 'three';

function BinaryRain() {
  const count = 30;
  const columns = useMemo(() => {
    return [...Array(count)].map(() => ({
      x: (Math.random() - 0.5) * 25,
      y: Math.random() * 20,
      speed: 0.03 + Math.random() * 0.05,
      chars: [...Array(15)].map(() => (Math.random() > 0.5 ? '1' : '0'))
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
  useFrame((state) => {
    if (ref.current) {
        ref.current.position.y -= col.speed;
        if (ref.current.position.y < -12) ref.current.position.y = 12;
    }
  });

  return (
    <group ref={ref} position={[col.x, col.y, -10]}>
      {col.chars.map((char: string, j: number) => (
        <Html key={j} position={[0, -j * 0.6, 0]} transform occlude={false}>
          <div className="text-[10px] text-cyan-500/30 font-mono select-none">
            {char}
          </div>
        </Html>
      ))}
    </group>
  );
}

function FloatingCode() {
  const snippets = [
    'void main() { ... }',
    'public class Security { ... }',
    'std::vector<int> v;',
    'System.out.println("INCIDENT_DETECTED");',
    'if (access_granted) { ... }',
    '#include <iostream>',
    'ptr = malloc(sizeof(Node));',
    'while (true) { monitor(); }'
  ];

  const particles = useMemo(() => {
    return snippets.map((text) => ({
      text,
      pos: [(Math.random() - 0.5) * 15, (Math.random() - 0.5) * 10, (Math.random() - 0.5) * 5],
      speed: 0.1 + Math.random() * 0.2
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
      ref.current.position.y += Math.sin(state.clock.getElapsedTime() * p.speed) * 0.002;
      ref.current.rotation.y += 0.001;
    }
  });

  return (
    <group ref={ref} position={p.pos as any}>
      <Html transform occlude={false} distanceFactor={8}>
        <div className="whitespace-nowrap text-[8px] text-cyan-400/20 font-mono bg-black/40 px-2 py-1 border border-cyan-500/10 backdrop-blur-sm">
          {p.text}
        </div>
      </Html>
    </group>
  );
}

function ParticleSphere() {
  const ref = useRef<THREE.Points>(null);
  
  const sphere = useMemo(() => {
    const positions = new Float32Array(2000 * 3);
    for (let i = 0; i < 2000; i++) {
        const theta = Math.random() * 2 * Math.PI;
        const phi = Math.acos(2 * Math.random() - 1);
        const x = 2 * Math.sin(phi) * Math.cos(theta);
        const y = 2 * Math.sin(phi) * Math.sin(theta);
        const z = 2 * Math.cos(phi);
        positions[i * 3] = x;
        positions[i * 3 + 1] = y;
        positions[i * 3 + 2] = z;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (ref.current) {
        ref.current.rotation.x = state.clock.getElapsedTime() * 0.03;
        ref.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <Points ref={ref} positions={sphere} stride={3}>
        <PointMaterial
          transparent
          color="#00f2ff"
          size={0.015}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
    </Points>
  );
}

function DataCore() {
    const ref = useRef<THREE.Mesh>(null);
    useFrame((state) => {
        if (ref.current) {
            ref.current.rotation.y = -state.clock.getElapsedTime() * 0.1;
            ref.current.scale.setScalar(1.2 + Math.sin(state.clock.getElapsedTime()) * 0.05);
        }
    });

    return (
        <mesh ref={ref}>
            <octahedronGeometry args={[1.2, 0]} />
            <meshStandardMaterial color="#fff" wireframe transparent opacity={0.1} />
        </mesh>
    );
}

export default function ThreeScene() {
  const [webglError, setWebglError] = React.useState(false);

  if (webglError) {
    return (
      <div className="absolute inset-0 z-0 bg-black flex flex-col items-center justify-center p-8 text-center">
        <div className="w-32 h-32 border-2 border-cyan-500/20 rounded-full animate-pulse flex items-center justify-center mb-4">
             <div className="w-16 h-16 border-2 border-cyan-500/40 rounded-full animate-ping" />
        </div>
        <p className="text-cyan-400/60 text-xs tracking-widest uppercase">Neural Link Offline</p>
        <p className="text-[10px] text-cyan-400/30 mt-2 uppercase">Hardware Acceleration Required</p>
      </div>
    );
  }

  return (
    <div className="absolute inset-0 z-0 bg-black" style={{ width: '100%', height: '100%' }}>
      <Suspense fallback={<div className="bg-black w-full h-full" />}>
        <Canvas 
          camera={{ position: [0, 0, 10], fov: 45 }} 
          dpr={1}
          onCreated={({ gl }) => {
            gl.domElement.addEventListener('webglcontextlost', () => setWebglError(true), false);
          }}
          onError={() => setWebglError(true)}
        >
          <color attach="background" args={['#000000']} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          
          <BinaryRain />
          <FloatingCode />

          <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
            <ParticleSphere />
            <DataCore />
          </Float>
          
        </Canvas>
      </Suspense>
    </div>
  );
}
