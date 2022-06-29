import { FunctionComponent } from "react";
import { select } from "../../store/heroes/heroesSlice";
import { useAppDispatch } from "../../store/hooks";
import { IHero } from "../../utils/heroHelper";

interface HeroSelectorProps {
    hero: IHero
}

const HeroSelector: FunctionComponent<HeroSelectorProps> = (props) => {
    const dispatch = useAppDispatch()
    return (
        <button onClick={() => dispatch(select(props.hero.id))} >
            {props.hero.name}
        </button>
    )
}

export default HeroSelector;