import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { IHero as IHero, selectHeroId, selectHeroes, selectHeroesState, Heroes } from "../../store/heroes/heroesSlice";

export function HeroBio() {
    const heroesState: Heroes = useAppSelector(selectHeroesState)
    let hero: IHero | undefined = heroesState.currentHeroId === undefined ? undefined : heroesState.all.find((el) => el.id === heroesState.currentHeroId)
    // const dispatch = useAppDispatch();
    return (
        <div>
            {hero === undefined ? <p> Select your hero</p> :
                <p>Your hero is {hero.name}</p>}
        </div>
    )
}