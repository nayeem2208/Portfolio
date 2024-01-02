import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  Preload,
  useGLTF,
  Img
} from "@react-three/drei";

import CanvasLoader from "../components/Loader";

const Computer = () => {
  const computer = useGLTF("./scene.gltf");

  return (
    <primitive
      object={computer.scene}
      scale={7}
      position-y={0}
      rotation-y={0}
    />
  );
};

const ComputerCanvas = () => {
  return (
    
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 55,
        near: 0.1,
        far: 200,
        position: [-4, , 8],
      }}
      size={{ width: window.innerWidth, height: window.innerHeight }}
      pixelRatio={window.devicePixelRatio}
    >
      <ambientLight />
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computer />
        
        <Preload all />
      </Suspense>
      <Environment preset="sunset" />
    </Canvas>
  );
};

export default ComputerCanvas;
