import Work from "../components/Work";
import { WORK_LIST } from "../config/WorkConfig";
import ContentLayout from "../layouts/ContentLayout";

const work = () => {
  return (
    <ContentLayout title="WORKs">
      <>
        <Work list={WORK_LIST} />
      </>
    </ContentLayout>
  );
};

export default work;
