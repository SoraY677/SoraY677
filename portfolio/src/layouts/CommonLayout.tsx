import Menu from "../components/Menu";
import Universe from "../components/Universe/index";
import { routeList } from "../config/MenuConfig";
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
      <nav className="absolute right-0 bottom-0 text-lg md:mb-10 md:mr-10 mb-3 mr-3">
        <Menu routes={routeList} />
      </nav>
    </main>
  );
}
