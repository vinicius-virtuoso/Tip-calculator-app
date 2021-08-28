import Bill from "./components/Bill";
import Resume from "./components/Resume";
import { Content, GlobalStyle, Logo } from "./Styles/Styleds";

function App() {
  return (
    <>
      <GlobalStyle/>
        <Logo src="./img/logo.svg" alt="Logo"/>
        <Content>
          <Bill/>
          <Resume/>
        </Content>
    </>
  );
}

export default App;
