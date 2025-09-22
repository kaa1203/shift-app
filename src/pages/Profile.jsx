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
  ProfileWrapper,
  ProfileIconWrapper,
  ProfilePictureWrapper,
  HeadingOne,
  HeadingThree,
  UserWrapper,
  ProfileBody,
  MiscWrapper,
  ButtonWrapper,
  ProfileButton,
} from "../components/App.styled";
import { LuCamera, LuPen } from "react-icons/lu";

const Profile = () => (
  <ProfileContainer>
    <IdentitySection>
      <ProfileBanner />
      <ProfileWrapper>
        <ProfilePictureWrapper>
          <ProfilePicture
            src="https://picsum.photos/1000/1000"
            alt="profile picture"
          />
          <ProfileIconWrapper>
            <LuCamera size="25" />
          </ProfileIconWrapper>
        </ProfilePictureWrapper>
        <UserWrapper>
          <HeadingOne>Kenneth Aguila</HeadingOne>
          <HeadingThree>@username</HeadingThree>
          <div>Mindful explorer since March 2024</div>
        </UserWrapper>

        <MiscWrapper>
          <ButtonWrapper>
            <ProfileButton>
              <LuPen size="20" />
              Edit Profile
            </ProfileButton>
            <ProfileButton>
              <LuCamera size="20" />
              Change Banner
            </ProfileButton>
          </ButtonWrapper>
          <QuickStatsWrapper>
            <StatsCard>
              <p>132</p>
              <p>Entries Count</p>
            </StatsCard>
            <StatsCard>
              <p>5 days</p>
              <p>Streak</p>
            </StatsCard>
            <StatsCard>
              <p>September 01. 2025</p>
              <p>Joined</p>
            </StatsCard>
          </QuickStatsWrapper>
        </MiscWrapper>
      </ProfileWrapper>
    </IdentitySection>
    <ProfileBody>
      <MoodSection>
        <h2>Mood</h2>
        <MoodContainer>
          <MoodWrapper>
            <div>Mood this week</div>
            <div>Most used tag this week</div>
          </MoodWrapper>
          <MoodGraphWrapper>
            This will be replaced with a line graph showing this weeks mood,
            with an option to redirect to the insights page for full graph
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
    </ProfileBody>
  </ProfileContainer>
);
export default Profile;
