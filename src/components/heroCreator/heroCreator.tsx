import { Form, Formik } from "formik";
import * as Yup from "yup";
import { Select } from "../form/select/select";
import { TextInput } from "../form/textInput/textInput";
import { CreatorPanel } from "./heroCreator.styles";

export function HeroCreator() {
    return (
        <CreatorPanel>
            Create new hero
            <Formik
                initialValues={{
                    name: '',
                    origin: ''
                }}
                onSubmit={(values) => {
                    console.log(values)
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
                        <option value="pl">Poland</option>
                        <option value="it">Italy</option>
                    </Select>
                    <button type="submit">Create!</button>
                </Form>


            </Formik>
        </CreatorPanel>
    )
}



