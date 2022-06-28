import { FunctionComponent } from "react";
import { IHero, IHeroes, selectHeroesState } from "../../store/heroes/heroesSlice";
import { useAppSelector } from "../../store/hooks";
import { BioTable } from "./heroBio.styles";

interface HeroBioProps {

}

const HeroBio: FunctionComponent<HeroBioProps> = () => {
    const heroesState: IHeroes = useAppSelector(selectHeroesState)
    let hero: IHero | undefined = heroesState.currentHeroId === undefined ? undefined : heroesState.all.find((el) => el.id === heroesState.currentHeroId)
    return (
        <div>
            {hero === undefined ? <p> Select your hero</p> :
                <>
                    <p>Your hero is {hero.name}</p>
                    <BioTable>
                        <tr>
                            <th>Origin</th>
                            <td>{hero.origin}</td>
                        </tr>
                        <tr>
                            <th>Money</th>
                            <td>{hero.money + " " + hero.currency}</td>
                        </tr>
                    </BioTable>
                </>
            }

        </div>
    );
}

export default HeroBio;