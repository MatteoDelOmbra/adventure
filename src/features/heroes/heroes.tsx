import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { IHero, select, selectHeroes } from "./heroesSlice";

export function Heroes() {
    const heroes = useAppSelector(selectHeroes)
    const dispatch = useAppDispatch();
    return (
        <div>
            <p>Available Heroes:</p>
            <ul>
                {heroes.map((hero: IHero) =>
                    <li>

                        <a href="#" onClick={() => dispatch(select(hero.id))} >
                            {hero.name}
                        </a>

                    </li>
                )}
            </ul>
        </div>
    )
}