import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Currency, Region, regionalCurrency } from "../../utils/regional"
import { RootState } from "../store"

export interface IHero {
    id: number
    name: string
    origin: Region
    currency: Currency
    money: Number
    arsenal: Array<Number> //id of bought weapons
    equippedWeapon?: Number //id of weapon
}

export interface IHeroes {
    currentHeroId?: Number
    all: Array<IHero>
}

const initialState: IHeroes = {
    all: [{
        id: 1,
        name: "Killjoy",
        origin: "pl",
        currency: regionalCurrency["pl"],
        money: 100,
        arsenal: [],
    },
    {
        id: 2,
        name: "Whither",
        origin: "it",
        currency: regionalCurrency["it"],
        money: 23.78,
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
        select: (state, action: PayloadAction<Number>) => {
            state.currentHeroId = action.payload
        }
    }
})

export const { add, select } = heroesSlice.actions
export const selectHeroesState = (state: RootState) => state.heroes
export const selectHeroes = (state: RootState) => state.heroes.all
export const selectHeroId = (state: RootState) => state.heroes.currentHeroId
export default heroesSlice.reducer