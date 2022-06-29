import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Currency } from '../../utils/regional'


export interface currencyConverter {
    from: Currency,
    to: Currency,
    amount: number
}

export const CurrencyApiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: "https://api.exchangerate.host" }),
    tagTypes: ['currencies'],
    endpoints: builder => ({
        convertCurrency: builder.query<any, currencyConverter>({
            query: ({ from, to, amount }) => `/convert?from=${from}&to=${to}&amount=${amount}`,
            providesTags: ['currencies']
        })
    })
})

export const {
    useConvertCurrencyQuery
} = CurrencyApiSlice