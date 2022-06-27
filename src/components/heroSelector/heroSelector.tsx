import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { IHero as IHero, selectHeroId, selectHeroes, selectHeroesState, Heroes, select } from "../../store/heroes/heroesSlice";

interface IProps {
    hero: IHero
}

export function HeroSelector(props: IProps) {
    const dispatch = useAppDispatch();
    return (
        <a href="#" onClick={() => dispatch(select(props.hero.id))} >
            {props.hero.name}
        </a>
    )
}