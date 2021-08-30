import Bill from "./components/Bill";
import Resume from "./components/Resume";
import { ValuesProvider } from "./Context/TheContext";
import { Accessible, Attribution, Content, GlobalStyle, Logo } from "./Styles/Styleds";

function App() {
  return (
    <>
      <GlobalStyle/>
        <Logo src="./img/logo.svg" alt="Logo"/>
        <ValuesProvider>
          <Content>
            <Accessible>SPLITTER</Accessible>
            <Bill/>
            <Resume/>
          </Content>
        </ValuesProvider>
        <Attribution>
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer" >Frontend Mentor</a>. 
          Coded by <a href="https://github.com/ViniciusViruoso" target="_blank" rel="noreferrer" >Vinicius Virtuoso</a>.
        </Attribution>
    </>
  );
}

export default App;
