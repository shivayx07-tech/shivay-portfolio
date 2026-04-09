"use client";

import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { PointMaterial, Points } from "@react-three/drei";

function Particles({ count = 3000 }) {
  const points = useRef<THREE.Points>(null);
  const { mouse, viewport } = useThree();

  const [positions, colors, initialPositions] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const initialPositions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    
    // Deeper space distribution
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 15;
      const y = (Math.random() - 0.5) * 15;
      const z = (Math.random() - 0.5) * 15;
      
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
      
      initialPositions[i * 3] = x;
      initialPositions[i * 3 + 1] = y;
      initialPositions[i * 3 + 2] = z;

      const mixedColor = new THREE.Color();
      mixedColor.setHSL(0.5 + Math.random() * 0.3, 0.8, 0.5 + Math.random() * 0.4);
      
      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }

    return [positions, colors, initialPositions];
  }, [count]);

  useFrame((state, delta) => {
    if (!points.current) return;
    
    const time = state.clock.getElapsedTime();
    points.current.rotation.y = time * 0.05;
    points.current.rotation.x = Math.sin(time * 0.1) * 0.1;

    // Mouse interaction - convert normalized mouse coordinates to world coordinates
    const mouseX = (mouse.x * viewport.width) / 2;
    const mouseY = (mouse.y * viewport.height) / 2;

    const positionsArray = points.current.geometry.attributes.position.array as Float32Array;

    for (let i = 0; i < count; i++) {
      const idx = i * 3;
      
      // Target position
      let targetX = initialPositions[idx];
      let targetY = initialPositions[idx + 1];
      
      const targetZ = initialPositions[idx + 2];
      
      // Add slight wave motion
      targetX += Math.sin(time + targetY) * 0.1;
      targetY += Math.cos(time + targetX) * 0.1;

      // Mouse repulsion distance check (only if close)
      const dx = mouseX - points.current.position.x - targetX * Math.cos(points.current.rotation.y) + targetZ * Math.sin(points.current.rotation.y); // Approximate calculation
      const dy = mouseY - points.current.position.y - targetY;

      
      const dxSimple = mouseX - targetX;
      const dySimple = mouseY - targetY;
      
      const distance = Math.sqrt(dxSimple * dxSimple + dySimple * dySimple);
      
      if (distance < 2) {
        const force = (2 - distance) / 2;
        targetX -= (dxSimple / distance) * force * 2;
        targetY -= (dySimple / distance) * force * 2;
      }

      // Approach target smoothly
      positionsArray[idx] += (targetX - positionsArray[idx]) * 0.1;
      positionsArray[idx + 1] += (targetY - positionsArray[idx + 1]) * 0.1;
    }
    
    points.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <Points ref={points} positions={positions} colors={colors} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        vertexColors
        size={0.03}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

export default function ParticleBackground() {
  return (
    <div className="absolute inset-0 z-0 bg-background pointer-events-none opacity-80 mix-blend-screen overflow-hidden">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <fog attach="fog" args={["#050505", 2, 10]} />
        <Particles />
      </Canvas>
    </div>
  );
}
