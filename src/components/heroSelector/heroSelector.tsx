import { FunctionComponent } from "react";
import { IHero, select } from "../../store/heroes/heroesSlice";
import { useAppDispatch } from "../../store/hooks";

interface HeroSelectorProps {
    hero: IHero
}

const HeroSelector: FunctionComponent<HeroSelectorProps> = (props) => {
    const dispatch = useAppDispatch();
    return (
        <a href="#" onClick={() => dispatch(select(props.hero.id))} >
            {props.hero.name}
        </a>
    )
}

export default HeroSelector;