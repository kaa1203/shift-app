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
  HeadingTwo,
  HeadingThree,
  UserWrapper,
  ProfileBody,
  MiscWrapper,
  ButtonWrapper,
  ProfileButton,
  EntrySection,
  EntryWrapper,
  EntryMask,
  EntryMaskButton,
} from "../components/App.styled";
import { LuCamera, LuPen } from "react-icons/lu";
import { useState } from "react";

const Profile = () => {
  const [isHidden, setIsHidden] = useState(true);

  return (
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
        <EntrySection>
          <h2>Entry of the week</h2>
          <EntryWrapper $isHidden={isHidden}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis nulla
            incidunt fugit ipsa possimus totam id quis excepturi, dolorem ad at
            labore ipsam. Voluptatum culpa dolores voluptatem temporibus iste
            odio, reprehenderit, explicabo totam iusto minima soluta? Repellat
            nemo voluptates harum quae. Consequatur dolorum animi natus, ea,
            tempore accusantium quam sint minima magnam veritatis voluptate
            nostrum a perspiciatis temporibus doloribus quae exercitationem.
            Debitis quod totam maxime inventore facilis? Libero excepturi
            laborum mollitia incidunt deleniti dignissimos in? Maiores maxime
            ipsam, nulla numquam itaque, omnis molestiae ducimus repudiandae et
            vel deleniti corrupti pariatur eligendi doloribus corporis deserunt.
            Consequuntur minus fugit molestiae quibusdam necessitatibus quidem,
            optio dolores consequatur magnam maxime quisquam ratione sapiente
            aperiam consectetur modi porro inventore, architecto labore. Animi
            illo officiis consequatur asperiores voluptatibus doloribus
            similique explicabo, adipisci expedita neque repellat libero
            quisquam eos deserunt illum? Beatae qui nostrum totam illo. Et est
            non, iure eveniet deleniti cupiditate in inventore, minima
            perspiciatis distinctio quae minus rem animi vel. Nemo assumenda
            sunt eveniet consequuntur impedit corporis et repellendus ipsa,
            atque dignissimos accusamus porro ipsam a velit tenetur blanditiis
            eum quasi illo labore nulla. Molestiae rem saepe expedita? Amet,
            veritatis deserunt minima quas voluptatibus fugiat iusto, aperiam
            corporis error porro numquam in odio architecto quisquam expedita
            perferendis repellat eligendi rerum a. Labore perspiciatis, tenetur
            asperiores recusandae ut rerum soluta voluptates harum laboriosam
            itaque mollitia neque odio atque nobis libero veritatis aliquam
            voluptatem quidem sunt? Debitis repellat laudantium qui magni modi
            veniam magnam illo aut nostrum cum, officia itaque deleniti
            perspiciatis eos ullam nulla inventore nobis asperiores facere odit
            voluptate labore accusantium delectus? Optio officia in vel placeat,
            quidem sint quam obcaecati at. Nemo ducimus quos aspernatur corrupti
            itaque, velit quia vel voluptates in accusantium consequatur
            mollitia maxime? Aperiam modi in exercitationem doloremque soluta
            dignissimos, iusto id ad quis necessitatibus, tempora repellendus
            voluptatibus libero voluptas eos neque ullam architecto commodi
            deleniti, asperiores quae velit. Beatae possimus officia vitae totam
            vero minima quaerat dolore deserunt eligendi ab optio animi,
            explicabo, fugit non delectus, dignissimos laboriosam omnis tenetur
            deleniti iste voluptate. Praesentium in dolor porro aut
            reprehenderit, qui libero, corrupti omnis nam mollitia vel sunt
            eligendi ipsa voluptatibus adipisci aspernatur dicta at asperiores!
            Debitis, fugit. Deserunt quam ea, debitis rerum pariatur consectetur
            esse tempora aut animi omnis amet soluta, distinctio, neque non
            reiciendis quo. Nobis officia vero libero incidunt non eaque
            molestias odit? Placeat voluptas tenetur aliquid voluptatibus quae
            fugit. Numquam doloribus non ea maiores blanditiis et quasi libero
            suscipit nisi ullam. Amet voluptate, quos assumenda, neque corrupti
            fugit rerum rem vel nesciunt at labore sed velit possimus
            dignissimos tenetur reprehenderit ullam. Cumque dolorem recusandae
            a? Minima tenetur expedita in nemo dolorum beatae doloribus pariatur
            alias excepturi accusantium maxime vel unde a modi mollitia
            suscipit, rerum laborum dolor at. Quis reiciendis aspernatur quae
            id. Aspernatur quod repellendus corporis amet maxime, cumque
            doloremque accusamus officiis officia eaque? Laborum, consequatur.
            Velit nostrum harum facilis aut, ea reiciendis consectetur modi hic?
            Fugiat porro doloribus minus ex beatae dolorem, veritatis
            consequuntur iusto facere molestias distinctio accusamus, labore
            voluptate molestiae. Ipsa, cupiditate!
          </EntryWrapper>
          <EntryMask className={isHidden ? "maskIsHidden" : ""}>
            <EntryMaskButton
              $isHidden={isHidden}
              onClick={() => setIsHidden(!isHidden)}
            >
              {isHidden ? "show more" : "show less"}
            </EntryMaskButton>
          </EntryMask>
        </EntrySection>
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
};
export default Profile;
