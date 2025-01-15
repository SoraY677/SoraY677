import Head from "next/head";
import Work from "../components/Work";
import { WORK_LIST } from "../config/WorkConfig";
import ContentLayout from "../layouts/ContentLayout";
import PageTransition from "../layouts/PageTransitionLayout";
import { META_TITLE_BASE } from "../config/MetaConfig";

const work = () => {
  return (
    <>
      <Head>
        <title>{`${META_TITLE_BASE} | WORKS`}</title>
      </Head>
      <PageTransition>
        <ContentLayout title="WORKS">
          <>
            <Work list={WORK_LIST} />
          </>
        </ContentLayout>
      </PageTransition>
    </>
  );
};

export default work;
