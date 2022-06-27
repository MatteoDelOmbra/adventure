export type Region = "pl" | "us" | "it" | "uk";
export type Currency = "PLN" | "USD" | "EUR" | "GBP";

export const regionalCurrency: Record<Region, Currency> = {
    pl: "PLN",
    us: "USD",
    it: "EUR",
    uk: "GBP"
}