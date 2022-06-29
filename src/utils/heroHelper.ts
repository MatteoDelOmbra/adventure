import { Currency, RegionSymbol } from "./regional"

export interface IHero {
    id: number
    name: string
    origin: RegionSymbol
    currency: Currency
    money: number
    arsenal: Array<number> //id of bought weapons
    equippedWeapon?: number //id of weapon
}

export interface IHeroes {
    currentHeroId?: number
    all: Array<IHero>
}
