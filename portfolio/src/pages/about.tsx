import Head from "next/head";
import Other from "../components/Other";
import Profile from "../components/Profile";
import Skill from "../components/Skills";
import { OTHER_LIST } from "../config/OtherConfig";
import {
  PROFILE_BASE_INFO_MAP,
  PROFILE_IMAGE_FADE_DURATION,
  PROFILE_IMAGES,
  PROFILE_NAME,
} from "../config/ProfileConfig";
import { SKILL_LIST } from "../config/SkillConfig";
import ContentLayout from "../layouts/ContentLayout";
import PageTransitionLayout from "../layouts/PageTransitionLayout";
import { META_TITLE_BASE } from "../config/MetaConfig";

const about = () => {
  return (
    <>
      <Head>
        <title>{`${META_TITLE_BASE} | ABOUT`}</title>
      </Head>
      <PageTransitionLayout>
        <ContentLayout title="ABOUT">
          <>
            <section className="mb-10">
              <Profile
                images={PROFILE_IMAGES}
                imageFadeDuration={PROFILE_IMAGE_FADE_DURATION}
                name={PROFILE_NAME}
                baseInfoMap={PROFILE_BASE_INFO_MAP}
              />
            </section>
            <section className="mb-10">
              <Skill list={SKILL_LIST} />
            </section>
            <section>
              <Other list={OTHER_LIST} />
            </section>
          </>
        </ContentLayout>
      </PageTransitionLayout>
    </>
  );
};

export default about;
