import { FunctionComponent } from "react";
import { selectHeroesState } from "../../store/heroes/heroesSlice";
import { useAppSelector } from "../../store/hooks";
import { IHero, IHeroes } from "../../utils/heroHelper";
import ChangeRegionButton from "../changeRegionButton/changeRegionButton";
import HeroBio from "../heroBio/heroBio";
import HeroCreator from "../heroCreator/heroCreator";
import Heroes from "../heroes/heroes";
import { ArsenalPanel, ColumnWrapper, Container, GamePanel, LeftPanel, RightPanel } from "./App.styles";

const App: FunctionComponent = () => {

  const heroesState: IHeroes = useAppSelector(selectHeroesState)
  let hero: IHero | undefined = heroesState.currentHeroId === undefined ? undefined : heroesState.all.find((el) => el.id === heroesState.currentHeroId)


  return (
    <Container>
      <h1>Adventure Game!</h1>
      <ColumnWrapper>
        <LeftPanel>
          <Heroes />
          {hero === undefined ? null :
            <>
              <button id="generate-mob">Change monster</button>                                 {/*React component*/}
              <ChangeRegionButton hero={hero} />
            </>
          }
        </LeftPanel>

        <RightPanel>
          <HeroCreator />

          <ColumnWrapper>
            <GamePanel>
              {hero === undefined ? <p> Select your hero</p> :
                <>
                  <HeroBio hero={hero} />
                  <button id="run">Attack monster!</button>                                    {/*React component*/}
                </>
              }
            </GamePanel>

            <ArsenalPanel>Here"s arsenal</ArsenalPanel>        {/*React component*/}
          </ColumnWrapper>
        </RightPanel>
      </ColumnWrapper>
    </Container>
  );
}

export default App;