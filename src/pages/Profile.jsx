import {
  ActivitySection,
  FooterSection,
  MoodSection,
  ProfileContainer,
  IdentitySection,
  ProfileBanner,
  ProfilePicture,
  QuickStatsWrapper,
  StatsCard,
  AchievementSection,
  BadgeWrapper,
  Badge,
  BadgeContainer,
} from "../components/App.styled";

const Profile = () => (
  <ProfileContainer>
    <IdentitySection>
      <ProfileBanner />
      <ProfilePicture
        src="https://picsum.photos/200/300"
        alt="profile picture"
      />
      <QuickStatsWrapper>
        <StatsCard>
          <h2>132</h2>
          <h3>Entries Count</h3>
        </StatsCard>
        <StatsCard>
          <h2>5 days</h2>
          <h3>Streak</h3>
        </StatsCard>
        <StatsCard>
          <h2>September 01. 2025</h2>
          <h3>Joined</h3>
        </StatsCard>
      </QuickStatsWrapper>
    </IdentitySection>
    <MoodSection></MoodSection>
    <AchievementSection>
      <h2>Achievements</h2>
      <BadgeContainer>
        <BadgeWrapper>
          <h2>Badge 1</h2> <p>This is a placeholder for badge</p>
        </BadgeWrapper>
      </BadgeContainer>
    </AchievementSection>
  </ProfileContainer>
);
export default Profile;
