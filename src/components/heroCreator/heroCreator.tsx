import { Form, Formik } from "formik";
import { FunctionComponent } from "react";
import * as Yup from "yup";
import { add, selectHeroes } from "../../store/heroes/heroesSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { IHero } from "../../utils/heroHelper";
import { Regions, setCurrency, setOrigin } from "../../utils/regional";
import Select from "../form/select/select";
import TextInput from "../form/textInput/textInput";
import { CreatorPanel } from "./heroCreator.styles";

const HeroCreator: FunctionComponent = () => {
    const heroes = useAppSelector(selectHeroes)
    const dispatch = useAppDispatch()

    function create(name: string, symbol: string) {
        let newHero: IHero = {
            id: heroes.length + 1,
            name: name,
            origin: setOrigin(symbol),
            currency: setCurrency(symbol),
            money: 100,
            arsenal: []
        }
        dispatch(add(newHero))
    }

    return (
        <CreatorPanel>
            Create new hero
            <Formik
                initialValues={{
                    name: '',
                    origin: ''
                }}
                onSubmit={(values) => {
                    create(values.name, values.origin)
                }}
                validationSchema={Yup.object({
                    name: Yup.string().max(10, "Too long!").required(),
                    origin: Yup.string().required()
                })}>

                <Form>
                    <TextInput
                        label="Hero's name"
                        name="name"
                        type="text"
                        placeholder="Enigma" />

                    <Select label="Origin" name="origin">
                        <option>Select hero's origin</option>
                        {Regions.map((region) => (
                            <option key={region.symbol} value={region.symbol}>{region.name}</option>
                        ))}
                    </Select>
                    <button type="submit">Create!</button>
                </Form>
            </Formik>
        </CreatorPanel>
    )
}
export default HeroCreator;