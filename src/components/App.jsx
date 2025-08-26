import GlobalStyle from "./GlobalStyle.styled";
import { Container, Main } from "./App.styled";
import SideNav from "./SideNav";
import { Outlet } from "react-router-dom";

const App = () => (
  <>
    <GlobalStyle />
    <Container>
      <SideNav />
      <Main>
        <Outlet />
      </Main>
    </Container>
  </>
);

export default App;
