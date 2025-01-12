import Universe from "../components/Universe/index";
import { TEXTURE_URL } from "../config/PlanetConfig";
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
              cameraPosition={[0, 0, 200]}
              orbitControlsMinDistance={200}
              orbitControlsMaxDistance={800}
              planetSize={64}
              planetTexturePath={TEXTURE_URL}
            />
          </div>
        )}
        {children}
      </div>
    </main>
  );
}
