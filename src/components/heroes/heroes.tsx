import { FunctionComponent } from "react";
import { selectHeroes } from "../../store/heroes/heroesSlice";
import { useAppSelector } from "../../store/hooks";
import { IHero } from "../../utils/heroHelper";
import HeroSelector from "../heroSelector/heroSelector";

const Heroes: FunctionComponent = () => {
    const heroes = useAppSelector(selectHeroes)
    return (
        <div>
            <p>Available Heroes:</p>
            <ul>
                {heroes.map((hero: IHero) =>
                    <li key={hero.id.toString()}>
                        <HeroSelector hero={hero} />
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Heroes;