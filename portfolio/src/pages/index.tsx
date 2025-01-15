import TypingText from "../components/TypingText";
import PageTransitionLayout from "../layouts/PageTransitionLayout";

export default function Index() {
  return (
    <div className="absolute flex justify-center w-full top-0 mt-4 mx-auto text-[clamp(2rem,7vw,3rem)] mix-blend-difference	">
      <PageTransitionLayout>
        <TypingText text={"Sora's Portfolio"} />
      </PageTransitionLayout>
    </div>
  );
}
