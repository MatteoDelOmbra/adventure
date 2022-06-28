import { IHero, selectHeroes } from "../../store/heroes/heroesSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { HeroSelector } from "../heroSelector/heroSelector";

export function Heroes() {
    const heroes = useAppSelector(selectHeroes)
    const dispatch = useAppDispatch();
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