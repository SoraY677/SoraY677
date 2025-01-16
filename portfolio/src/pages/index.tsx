import Head from "next/head";
import TypingText from "../components/TypingText";
import { PORTFOLIO_SUB_TITLE, PORTFOLIO_TITLE } from "../config/TopConfig";
import PageTransitionLayout from "../layouts/PageTransitionLayout";
import { META_TITLE_BASE } from "../config/MetaConfig";

export default function Index() {
  return (
    <>
      <Head>
        <title>{`${META_TITLE_BASE} | TOP`}</title>
      </Head>
      <div className="absolute flex justify-center w-full top-0 mt-4 mx-auto  mix-blend-difference">
        <PageTransitionLayout>
          <>
            <p className="text-center text-[clamp-0.8rem,4vw,1.4rem)]">
              {PORTFOLIO_SUB_TITLE}
            </p>
            <p className="text-[clamp(2rem,7vw,3rem)]">
              <TypingText text={PORTFOLIO_TITLE} />
            </p>
          </>
        </PageTransitionLayout>
      </div>
    </>
  );
}
