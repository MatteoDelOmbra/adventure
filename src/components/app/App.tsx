import { Heroes } from "../heroes/heroes";
import { HeroBio } from "../heroBio/heroBio";
import { ColumnWrapper, Container, LeftPanel, RightPanel, GamePanel, ArsenalPanel } from "./App.styles";
import { HeroCreator } from "../heroCreator/heroCreator";

function App() {
  return (
    <Container>
      <h1>Adventure Game!</h1>
      <ColumnWrapper>
        <LeftPanel>
          <Heroes />
          <button id="generate-mob">Zmiana stworka</button>                                 {/*React component*/}
          <button id="region">Zmiana regionu</button>                                       {/*React component*/}
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
