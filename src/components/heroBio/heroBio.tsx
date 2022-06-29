import { FunctionComponent } from "react";
import { IHero } from "../../utils/heroHelper";
import { BioTable } from "./heroBio.styles";

interface HeroBioProps {
    hero: IHero
}

const HeroBio: FunctionComponent<HeroBioProps> = (props) => {
    return (
        <>
            <p>Your hero is {props.hero.name}</p>
            <BioTable>
                <tbody>
                    <tr>
                        <th>Origin</th>
                        <td>{props.hero.origin}</td>
                    </tr>
                    <tr>
                        <th>Money (Currency depends on current location)</th>
                        <td>{props.hero.money + " " + props.hero.currency}</td>
                    </tr>
                </tbody>
            </BioTable>
        </>

    );
}

export default HeroBio;