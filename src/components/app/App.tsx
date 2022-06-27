import { Heroes } from '../heroes/heroes';
import { HeroBio } from '../heroBio/heroBio';
import { ColumnWrapper, Container, LeftPanel, RightPanel, GamePanel, ArsenalPanel, CreatorPanel } from './App.styles';
import { Formik, useFormik } from 'formik';
import * as Yup from "yup"

function App() {
  const formState = useFormik({
    initialValues: {
      name: ""
    },
    validationSchema: Yup.object({
      name: Yup.string().max(10, "Too long!")
    }),
    onSubmit: (values) => { console.log(values.name) }
  })

  return (
    <Container>
      <h1>Adventure Game!</h1>
      <ColumnWrapper>
        <LeftPanel>
          <Heroes /> {/*przerob na liste komponentow hero */}
          <button id='generate-mob'>Zmiana stworka</button>                                 {/*React component*/}
          <button id='region'>Zmiana regionu</button>                                       {/*React component*/}
        </LeftPanel>

        <RightPanel>
          <CreatorPanel>
            Tworzenie postaci
            <form onSubmit={formState.handleSubmit}>
              <input
                id="name"
                name='name'
                type="text"
                onChange={formState.handleChange}
                onBlur={formState.handleBlur}
                value={formState.values.name}
              />
              {formState.touched.name && formState.errors.name ? <p>{formState.errors.name}</p> : null}
              <button type='submit'>Click me!</button>
            </form>
          </CreatorPanel>                                                                            {/*React component*/}

          <ColumnWrapper>
            <GamePanel>
              <HeroBio />
              <button id='run'>Attack monster!</button>                                    {/*React component*/}
            </GamePanel>

            <ArsenalPanel>Here's arsenal</ArsenalPanel>        {/*React component*/}
          </ColumnWrapper>
        </RightPanel>
      </ColumnWrapper>
    </Container>
  );
}

export default App;
