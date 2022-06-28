import { Currency, RegionSymbol } from "./regional"

export interface IHero {
    id: number
    name: string
    origin: RegionSymbol
    currency: Currency
    money: Number
    arsenal: Array<Number> //id of bought weapons
    equippedWeapon?: Number //id of weapon
}

export interface IHeroes {
    currentHeroId?: Number
    all: Array<IHero>
}
