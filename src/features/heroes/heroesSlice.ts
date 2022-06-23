import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"

export interface HeroesState {
    list: Array<number>
    title: String
}

const initialState: HeroesState = {
    list: [],
    title: "Heroes list"
}

export const heroesSlice = createSlice({
    name: 'heroes',
    initialState,
    reducers: {
        increment: (state) => {
            state.list.push(5)
        }
    }
})

export const { increment } = heroesSlice.actions
export const selectHeroes = (state: RootState) => state.heroes
export default heroesSlice.reducer