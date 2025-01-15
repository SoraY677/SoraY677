import Work from "../components/Work";
import { WORK_LIST } from "../config/WorkConfig";
import ContentLayout from "../layouts/ContentLayout";
import PageTransition from "../layouts/PageTransitionLayout";

const work = () => {
  return (
    <PageTransition>
      <ContentLayout title="WORKS">
        <>
          <Work list={WORK_LIST} />
        </>
      </ContentLayout>
    </PageTransition>
  );
};

export default work;
