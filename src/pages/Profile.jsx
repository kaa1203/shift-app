import { FaMedal } from "react-icons/fa";
import {
  ActivitySection,
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
  MoodContainer,
  MoodWrapper,
  MoodGraphWrapper,
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
    <MoodSection>
      <h2>Mood</h2>
      <MoodContainer>
        <MoodWrapper>
          <div>Mood this week</div>
          <div>Most used tag this week</div>
        </MoodWrapper>
        <MoodGraphWrapper>
          This will be replaced with a line graph showing this weeks mood, with
          an option to redirect to the insights page for full graph
        </MoodGraphWrapper>
      </MoodContainer>
    </MoodSection>
    <AchievementSection>
      <h2>Achievements</h2>
      <BadgeContainer>
        <BadgeWrapper>
          <Badge>
            <FaMedal size="30" />
          </Badge>
          <div>
            <h2>Badge 1</h2>
            <p>This is a placeholder for badge</p>
          </div>
        </BadgeWrapper>
        <BadgeWrapper>
          <Badge>
            <FaMedal size="30" />
          </Badge>
          <div>
            <h2>Badge 2</h2>
            <p>This is a placeholder for badge</p>
          </div>
        </BadgeWrapper>
        <BadgeWrapper>
          <Badge>
            <FaMedal size="30" />
          </Badge>
          <div>
            <h2>Badge 3</h2>
            <p>This is a placeholder for badge</p>
          </div>
        </BadgeWrapper>
        <BadgeWrapper>
          <Badge>
            <FaMedal size="30" />
          </Badge>
          <div>
            <h2>Badge 4</h2>
            <p>This is a placeholder for badge</p>
          </div>
        </BadgeWrapper>
      </BadgeContainer>
    </AchievementSection>
  </ProfileContainer>
);
export default Profile;
