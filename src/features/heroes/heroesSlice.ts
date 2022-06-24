import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"

export enum Origin {
    pl,
    us,
    it,
    uk
}

export enum Currency {
    PLN,
    USD,
    EUR,
    GBP
}

export interface IHero {
    id: Number
    name: String
    origin: Origin
    currency: Currency
    money: Number,
    arsenal: Array<Number> //id of bought weapons
    equippedWeapon?: Number //id of weapon
}

export interface Heroes {
    currentHeroId?: Number
    all: Array<IHero>
}


const initialState: Heroes = {
    all: [{
        id: 1,
        name: "Killjoy",
        origin: Origin.pl,
        currency: Currency.PLN,
        money: 100,
        arsenal: [],
    },
    {
        id: 2,
        name: "Whither",
        origin: Origin.it,
        currency: Currency.EUR,
        money: 23.78,
        arsenal: [],
    }]
}


export const heroesSlice = createSlice({
    name: 'heroes',
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