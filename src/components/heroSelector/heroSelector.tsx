import { IHero, select } from "../../store/heroes/heroesSlice";
import { useAppDispatch } from "../../store/hooks";

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