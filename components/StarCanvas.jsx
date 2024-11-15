"use client";

import React, { useState, useRef, Suspense, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";

const StarBackground = (props) => {
  const [random, setRandom] = useState(null);
  const [sphere, setSphere] = useState(null); // State for sphere data
  const ref = useRef();

  // Dynamically import maath
  useEffect(() => {
    import("maath/random/dist/maath-random.esm")
      .then((module) => {
        setRandom(module);
      })
      .catch((error) => {
        console.error("Error loading maath:", error);
      });
  }, []);

  // Only generate the sphere once maath is loaded
  useEffect(() => {
    if (random) {
      const generatedSphere = random.inSphere(new Float32Array(5000), {
        radius: 1.2,
      });
      setSphere(generatedSphere);
    }
  }, [random]);

  // Ensure useFrame is always called
  useFrame((state, delta) => {
    // Only apply rotation if sphere data is available
    if (sphere) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  // Don't render anything until random and sphere are loaded
  if (!sphere) return null;

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#fff"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarCanvas = () => {
  return (
    <div className="fixed inset-0 -z-50 h-auto w-full">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <StarBackground />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default StarCanvas;
