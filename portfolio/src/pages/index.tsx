import Head from "next/head";
import TypingText from "../components/TypingText";
import { PORTFOLIO_TITLE } from "../config/TopConfig";
import PageTransitionLayout from "../layouts/PageTransitionLayout";
import { META_TITLE_BASE } from "../config/MetaConfig";

export default function Index() {
  return (
    <>
      <Head>
        <title>{`${META_TITLE_BASE} | TOP`}</title>
      </Head>
      <div className="absolute flex justify-center w-full top-0 mt-4 mx-auto text-[clamp(2rem,7vw,3rem)] mix-blend-difference	">
        <PageTransitionLayout>
          <TypingText text={PORTFOLIO_TITLE} />
        </PageTransitionLayout>
      </div>
    </>
  );
}
