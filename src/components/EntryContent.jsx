import {
  ColumnTwo,
  HeaderWrapper,
  HeaderButtonWrapper,
  HeaderButton,
  HeadingThree,
  SectionList,
  SectionItem,
  Article,
  DummyPicture,
  ColumnTwoSection,
} from "./App.styled";

import {
  LuArrowRight,
  LuArrowLeft,
  LuPlus,
  LuFullscreen,
} from "react-icons/lu";

import { useDispatch } from "react-redux";
import { setFullscreen } from "../redux/fullScreenSlice";
import { openModal } from "../redux/modalSlice";

const EntryContent = () => {
  const dispatch = useDispatch();

  return (
    <ColumnTwo>
      <HeaderWrapper>
        <HeaderButtonWrapper>
          <HeaderButton>
            <LuArrowLeft size="25" />
          </HeaderButton>
          <HeaderButton>
            <LuArrowRight size="25" />
          </HeaderButton>
        </HeaderButtonWrapper>
        <h3>August 25. 2025</h3>
        <HeaderButtonWrapper>
          <HeaderButton onClick={() => dispatch(setFullscreen())}>
            <LuFullscreen size="25" />
          </HeaderButton>
          <HeaderButton onClick={() => dispatch(openModal())}>
            <LuPlus size="25" />
          </HeaderButton>
        </HeaderButtonWrapper>
      </HeaderWrapper>
      <ColumnTwoSection>
        <Article>
          <h3>Lorem ipsum dolor sit.</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt
            delectus saepe, accusamus molestiae doloremque omnis itaque amet
            explicabo commodi voluptas facilis necessitatibus ullam maxime,
            tempora maiores quo velit autem. Delectus, quisquam facere eveniet
            quas voluptate non deserunt dolorem odit autem natus officiis ipsum
            corrupti rem hic illum aliquam, excepturi ipsam? Hic eos aliquid
            porro quasi, excepturi, nemo assumenda provident blanditiis cum
            aperiam nulla magni molestiae voluptatibus, iusto suscipit
            asperiores ratione repudiandae facilis neque explicabo. Sequi, illo
            rerum est optio earum neque, molestiae aut totam fugit sapiente
            natus enim qui mollitia sit illum, impedit recusandae sint accusamus
            placeat commodi eligendi. Nobis sunt impedit repellat earum
            similique accusantium culpa vel vero, quidem, tempore suscipit
            numquam sint et optio incidunt. Facilis consequuntur id beatae culpa
            quasi sit! Laborum omnis maxime ipsum minus similique ipsa totam,
            reiciendis optio quis cumque ad tempore corrupti facilis temporibus
            quos mollitia necessitatibus aliquid amet pariatur maiores soluta
            asperiores est. Eum adipisci dolores praesentium quaerat. Dolorum
            placeat voluptas deserunt cupiditate, dignissimos nihil, ea cum
            aliquid quas, porro vero amet maiores quaerat ducimus non fugit
            dolore! Ullam odit minus est consequuntur mollitia quod at! Adipisci
            necessitatibus doloribus accusantium facere minima laboriosam
            voluptatum magni illum nemo aspernatur sequi animi, accusamus
            fugiat?
          </p>
          <DummyPicture>i am a photo</DummyPicture>
        </Article>
        <div>asdasd</div>
      </ColumnTwoSection>
    </ColumnTwo>
  );
};
export default EntryContent;
