export type RegionSymbol = "pl" | "us" | "it" | "uk";
export type Currency = "PLN" | "USD" | "EUR" | "GBP";

interface IRegion {
    symbol: RegionSymbol
    name: string
    currency: Currency
}

export const Regions: Array<IRegion> = [
    { symbol: "pl", name: "Poland", currency: "PLN" },
    { symbol: "us", name: "USA", currency: "USD" },
    { symbol: "it", name: "Italy", currency: "EUR" },
    { symbol: "uk", name: "United Kingdom", currency: "GBP" },
]

export function setCurrency(symbol: string): Currency {
    let region = Regions.find(region => region.symbol === symbol)
    if (!region) {
        return "PLN"
    }
    return region.currency
}

export function setOrigin(symbol: string): RegionSymbol {
    let region = Regions.find(region => region.symbol === symbol)
    if (!region) {
        return "pl"
    }
    return region.symbol
}