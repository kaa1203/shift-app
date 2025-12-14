import GlobalStyle from "./GlobalStyle.styled";
import { Container, Main } from "./App.styled";
import SideNav from "./SideNav";
import { Outlet, useLocation } from "react-router-dom";
import Modal from "./Modals/Modal";

const App = () => {
  const location = useLocation();
  const current = location.pathname;

  return (
    <>
      <GlobalStyle />
      <Modal />
      <Container>
        {current !== "/" && <SideNav />}
        <Main>
          <Outlet />
        </Main>
      </Container>
    </>
  );
};

export default App;
