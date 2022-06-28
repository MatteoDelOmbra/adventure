import { FunctionComponent } from "react";
import HeroBio from "../heroBio/heroBio";
import HeroCreator from "../heroCreator/heroCreator";
import Heroes from "../heroes/heroes";
import { ArsenalPanel, ColumnWrapper, Container, GamePanel, LeftPanel, RightPanel } from "./App.styles";

const App: FunctionComponent = () => {
  return (
    <Container>
      <h1>Adventure Game!</h1>
      <ColumnWrapper>
        <LeftPanel>
          <Heroes />
          <button id="generate-mob">Zmiana stworka</button>                                 {/*React component*/}
          <button id="region">Change region</button>                                       {/*React component*/}
          {
            /*
            dodaj do hero info w jakim regionie sie obecnie znajduje ( w sumie nie, bo to wiemy patrzac na walute)
            wez liste, usun z niej region w ktorym jest bohater (wedle waluty) i wylosuj jeden region
            wyslij async request do https://exchangerate.host/#/docs aby przeliczyc kase bohatera
            wprowadz zmiany do money i currency bohatera
            */
          }
        </LeftPanel>

        <RightPanel>
          <HeroCreator />

          <ColumnWrapper>
            <GamePanel>
              <HeroBio />
              <button id="run">Attack monster!</button>                                    {/*React component*/}
            </GamePanel>

            <ArsenalPanel>Here"s arsenal</ArsenalPanel>        {/*React component*/}
          </ColumnWrapper>
        </RightPanel>
      </ColumnWrapper>
    </Container>
  );
}

export default App;