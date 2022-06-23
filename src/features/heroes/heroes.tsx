import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { increment, selectHeroes } from "./heroesSlice";
import { increment as incNum } from "../counter/counterSlice";

export function Heroes() {
    const heroes = useAppSelector(selectHeroes)
    const dispatch = useAppDispatch();
    return (
        <div>
            <p>This is my list named: {heroes.title}</p>
            <p>It's {heroes.list.length} length</p>
            <button onClick={() => dispatch(increment())}>Add a hero</button>
            <button onClick={() => dispatch(incNum())}>Add a number</button>

        </div>
    )
}