import Profile from "../components/Profile";
import Skill from "../components/Skills";
import {
  PROFILE_BASE_INFO_MAP,
  PROFILE_CONTENT,
  PROFILE_IMAGE_FADE_DURATION,
  PROFILE_IMAGES,
  PROFILE_NAME,
} from "../config/ProfileConfig";
import { SKILL_LIST } from "../config/SkillConfig";
import ContentLayout from "../layouts/ContentLayout";

const about = () => {
  return (
    <ContentLayout title="ABOUT">
      <>
        <Profile
          images={PROFILE_IMAGES}
          imageFadeDuration={PROFILE_IMAGE_FADE_DURATION}
          name={PROFILE_NAME}
          baseInfoMap={PROFILE_BASE_INFO_MAP}
          content={PROFILE_CONTENT}
        />
        <section>
          <Skill list={SKILL_LIST} />
        </section>
      </>
    </ContentLayout>
  );
};

export default about;
