import Menu from "../components/Menu";
import TypingText from "../components/TypingText";
import { routeList } from "../config/MenuConfig";

export default function Index() {
  return (
    <>
      <div className="absolute flex justify-center w-full top-0 mt-4 mx-auto text-[clamp(2rem,7vw,3rem)]">
        <TypingText text={"Sora's Portfolio"} />
      </div>
    </>
  );
}
