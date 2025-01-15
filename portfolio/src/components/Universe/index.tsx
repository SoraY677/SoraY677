import { OrbitControls, PerspectiveCamera, Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Planet from "./Planet";

type Props = {
  cameraPosition: [number, number, number];
  orbitControlsMinDistance: number;
  orbitControlsMaxDistance: number;
  OrbitControlsZoomSpeed?: number;
  planetSize: number;
  planetTexturePath: string;
};

const Universe = ({
  cameraPosition,
  orbitControlsMinDistance,
  orbitControlsMaxDistance,
  planetSize,
  planetTexturePath,
  OrbitControlsZoomSpeed = 0.1,
}: Props) => {
  return (
    <Canvas>
      <PerspectiveCamera makeDefault position={cameraPosition} />
      <ambientLight intensity={3} />
      <OrbitControls
        minDistance={orbitControlsMinDistance}
        maxDistance={orbitControlsMaxDistance}
        zoomSpeed={OrbitControlsZoomSpeed}
      />
      <Stars />
      <Planet size={planetSize} texturePath={planetTexturePath} />
    </Canvas>
  );
};

export default Universe;
