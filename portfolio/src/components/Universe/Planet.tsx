import { useFrame, useLoader } from "@react-three/fiber";
import { useState } from "react";
import { TextureLoader } from "three";

type Props = {
  texturePath: string;
  size: number;
  rotateSpeed?: number;
};

const Planet = ({ texturePath, size, rotateSpeed = 0.001 }: Props) => {
  const earthMap = useLoader(TextureLoader, texturePath);

  const [rotateY, setRotateY] = useState(0.0);
  useFrame(() => {
    setRotateY(rotateY + rotateSpeed);
  });

  return (
    <mesh
      castShadow
      position={[0, 0, 0]}
      receiveShadow
      rotation={[0, rotateY, 0]}
    >
      <sphereGeometry args={[40, size, size]} />
      <meshPhysicalMaterial map={earthMap} />
    </mesh>
  );
};

export default Planet;
