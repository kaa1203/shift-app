import {
  ActivitySection,
  FooterSection,
  MoodSection,
  ProfileContainer,
  IdentitySection,
  QuickStatsSection,
  ProfileBanner,
  ProfilePicture,
} from "../components/App.styled";

const Profile = () => (
  <ProfileContainer>
    <IdentitySection>
      <ProfileBanner />
      <ProfilePicture src={null} alt="profile picture" />
    </IdentitySection>
    <QuickStatsSection></QuickStatsSection>
    <MoodSection></MoodSection>
    <ActivitySection></ActivitySection>
    <FooterSection></FooterSection>
  </ProfileContainer>
);
export default Profile;
