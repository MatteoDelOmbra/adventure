import { skipToken, SkipToken } from "@reduxjs/toolkit/dist/query";
import { FunctionComponent, useEffect, useState } from "react";
import { currencyConverter, useConvertCurrencyQuery } from "../../store/api/currencyApiSlice";
import { update } from "../../store/heroes/heroesSlice";
import { useAppDispatch } from "../../store/hooks";
import { IHero } from "../../utils/heroHelper";
import { Currency, IRegion, Regions } from "../../utils/regional";

interface ChangeRegionButtonProps {
    hero: IHero
}

const ChangeRegionButton: FunctionComponent<ChangeRegionButtonProps> = (props) => {

    const drawNewRegion = (exluded: Currency): IRegion => {
        //something here is wrong (when run drawNewRegion, props.hero.currency is wrong and it draw from table with location in which we alreade are)
        //silly workaround - try to do this without exluded parameter
        const availableRegions = Regions.filter(region => region.currency !== exluded)
        return availableRegions[Math.floor(Math.random() * availableRegions.length)]
    }

    const dispatch = useAppDispatch()

    const [nextRegion, setNextRegion] = useState<IRegion>(drawNewRegion(props.hero.currency))

    const [currencyConverter, setCurrencyConverter] = useState<currencyConverter | SkipToken>(skipToken)

    const converterResult = useConvertCurrencyQuery(currencyConverter)

    useEffect(() => {
        if (converterResult.isSuccess && !converterResult.isFetching) {
            let updatedHero: IHero = Object.assign({}, props.hero)
            updatedHero.currency = converterResult.data.query.to
            updatedHero.money = converterResult.data.result
            dispatch(update(updatedHero))
        }
    }, [converterResult])

    const moveHero = () => {
        setCurrencyConverter({ from: props.hero.currency, to: nextRegion.currency, amount: props.hero.money })
        setNextRegion(drawNewRegion(nextRegion.currency))
    }

    return (
        <button onClick={moveHero}>Move to {nextRegion.name}!</button>
    );
}

export default ChangeRegionButton;