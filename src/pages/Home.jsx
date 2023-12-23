import { Canvas } from "@react-three/fiber";
import { useState, Suspense } from "react";
import {
  adjustGirlForScreenSize,
  adjustBlueButterlyForScreenSize,
  adjustButterfliesForScreenSize,
} from "../utils/Utils";

import Loader from "../components/Home/Loader";

import Sky from "../models/Sky";
import Girl2 from "../models/Girl2";
import Butterflies from "../models/Butterflies";
import ButterflyBlue from "../models/ButterflyBlue";

const Home = () => {
  const [isRotating, setIsRotating] = useState(false);

  const [girlScale, girlPosition, girlRotation] = adjustGirlForScreenSize();

  const [blueButterflyScale, blueButterflyPosition] =
    adjustBlueButterlyForScreenSize();

  const [butterfliesScale, butterfliesPosition, butterfliesRotation] =
    adjustButterfliesForScreenSize();

  return (
    <section className="w-full h-screen relative">
      <div className="absolute left-0 right-0 top-0 bottom-0 flex items-center justify-center">
        <Canvas
          className={`w-full h-screen bg-transparent ${
            isRotating ? "cursor-grabbing" : "cursor-grab"
          }`}
          camera={{ near: 0.1, far: 1000 }}
        >
          <Suspense fallback={<Loader />}>
            <directionalLight position={[1, 0.75, 1]} intensity={1.5} />
            <ambientLight intensity={2} />
            <hemisphereLight
              skyColor={"#b1e1ff"}
              groundColor={"#000000"}
              intensity={2}
            />
            <Sky />
            <Butterflies
              scale={butterfliesScale}
              position={butterfliesPosition}
              rotation={butterfliesRotation}
              isRotating={isRotating}
            />
            <ButterflyBlue
              scale={blueButterflyScale}
              position={blueButterflyPosition}
              isRotating={isRotating}
              rotation={[-10, -20, 0]}
            />
            {/* <Girl
              scale={girlScale}
              position={girlPosition}
              rotation={girlRotation}
              isRotating={isRotating}
              setIsRotating={setIsRotating}
            /> */}
            <Girl2
              scale={girlScale}
              position={girlPosition}
              rotation={girlRotation}
              isRotating={isRotating}
              setIsRotating={setIsRotating}
            />
          </Suspense>
        </Canvas>
      </div>
      <a
        className="absolute bottom-2 left-2 z-10 flex items-center justify-center glassmorphism pl-1 pr-1 shadow-md font-light text-sm"
        href="https://sketchfab.com/3d-models/seeu-miniature-5f7371056ba148e0a7936014a9b05030"
      >
        SeeU Miniature by tyurru02
      </a>
    </section>
  );
};

export default Home;
