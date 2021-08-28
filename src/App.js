import Bill from "./components/Bill";
import Resume from "./components/Resume";
import { ValuesProvider } from "./Context/TheContext";
import { Content, GlobalStyle, Logo } from "./Styles/Styleds";

function App() {
  return (
    <>
      <GlobalStyle/>
        <Logo src="./img/logo.svg" alt="Logo"/>
        <ValuesProvider>
          <Content>
            <Bill/>
            <Resume/>
          </Content>
        </ValuesProvider>
    </>
  );
}

export default App;
