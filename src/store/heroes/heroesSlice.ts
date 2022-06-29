import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IHero, IHeroes } from "../../utils/heroHelper"
import { setCurrency, setOrigin } from "../../utils/regional"
import { RootState } from "../store"

const initialState: IHeroes = {
    all: [{
        id: 1,
        name: "Killjoy",
        origin: setOrigin("pl"),
        currency: setCurrency("pl"),
        money: 100,
        arsenal: [],
    },
    {
        id: 2,
        name: "Whither",
        origin: setOrigin("pl"),
        currency: setCurrency("it"),
        money: 66,
        arsenal: [],
    }]
}


export const heroesSlice = createSlice({
    name: "heroes",
    initialState,
    reducers: {
        add: (state, action: PayloadAction<IHero>) => {
            state.all.push(action.payload)
        },
        select: (state, action: PayloadAction<number>) => {
            state.currentHeroId = action.payload
        },
        update: (state, action: PayloadAction<IHero>) => {
            const heroes = state.all.map(hero => hero.id === action.payload.id ? action.payload : hero)
            state.all = heroes
        }
    }
})

export const { add, select, update } = heroesSlice.actions
export const selectHeroesState = (state: RootState) => state.heroes
export const selectHeroes = (state: RootState) => state.heroes.all
export const selectHeroId = (state: RootState) => state.heroes.currentHeroId
export default heroesSlice.reducer
