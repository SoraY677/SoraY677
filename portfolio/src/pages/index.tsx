import { useEffect, useState } from "react";
import Menu from "../components/Menu";
import TypingText from "../components/TypingText";

export default function Index() {
  const [routes, setRoutes] = useState<Routes>([]);
  useEffect(() => {
    setRoutes([{ text: "about", path: "/about" }]);
  }, []);
  return (
    <>
      <div className="absolute flex justify-center w-full top-0 mt-4 mx-auto text-[7vw]">
        <TypingText text={"Sora's Portfolio"} />
      </div>
      <nav className="absolute right-0 bottom-0 text-[2rem]">
        <Menu routes={routes} />
      </nav>
    </>
  );
}
