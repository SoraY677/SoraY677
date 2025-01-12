import Universe from "../components/Universe/index";
import {
  CAMERA_DEFAULT_POSITION_Z,
  CAMERA_ZOOM_MAX,
  CAMERA_ZOOM_MIN,
  PLANET_SIZE,
  PLANET_TEXTURE_PATH,
} from "../config/PlanetConfig";
import useIsClientHook from "../hooks/useIsClientHook";

type Props = {
  children: React.ReactElement;
};

export default function CommonLayout({ children }: Props) {
  const isClient = useIsClientHook();

  return (
    <main className="absolute top-0 left-0 h-dvh w-dvw">
      <div className={`relative w-full h-full`}>
        {isClient && (
          <div className="absolute top-0 left-0 w-full h-full z-0 bg-none">
            <Universe
              cameraPosition={[0, 0, CAMERA_DEFAULT_POSITION_Z]}
              orbitControlsMinDistance={CAMERA_ZOOM_MIN}
              orbitControlsMaxDistance={CAMERA_ZOOM_MAX}
              planetSize={PLANET_SIZE}
              planetTexturePath={PLANET_TEXTURE_PATH}
            />
          </div>
        )}
        {children}
      </div>
    </main>
  );
}
