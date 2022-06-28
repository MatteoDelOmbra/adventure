import { IHero, IHeroes, selectHeroesState } from "../../store/heroes/heroesSlice";
import { useAppSelector } from "../../store/hooks";

export function HeroBio() {
    const heroesState: IHeroes = useAppSelector(selectHeroesState)
    let hero: IHero | undefined = heroesState.currentHeroId === undefined ? undefined : heroesState.all.find((el) => el.id === heroesState.currentHeroId)
    return (
        <div>
            {hero === undefined ? <p> Select your hero</p> :
                <p>Your hero is {hero.name}</p>}
        </div>
    )
}