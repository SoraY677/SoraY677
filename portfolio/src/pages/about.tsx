import Profile from "../components/Profile";
import {
  PROFILE_BASE_INFO_MAP,
  PROFILE_CONTENT,
  PROFILE_IMAGE_FADE_DURATION,
  PROFILE_IMAGES,
  PROFILE_NAME,
} from "../config/ProfileConfig";
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
      </>
    </ContentLayout>
  );
};

export default about;
