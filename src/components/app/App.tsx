import { Heroes } from '../heroes/heroes';
import { Hero } from '../heroe/hero';
import { Title } from './App.styles';
import React from 'react';
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
    <React.Fragment>
      <Title>Adventure Game!</Title>
      <div className="App" style={{ borderStyle: 'solid', display: 'flex', flexDirection: 'row' }}>
        <div id='side-panel' style={{ borderStyle: 'solid', display: 'flex', flexDirection: 'column' }}>
          <Heroes /> {/*przerob na liste komponentow hero */}

          <button id='generate-mob'>Zmiana stworka</button>                                 {/*React component*/}
          <button id='region'>Zmiana regionu</button>                                       {/*React component*/}
        </div>

        <div id='main'>
          <div id='hero-creator' style={{ borderStyle: 'solid' }}>
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
          </div>                                                                            {/*React component*/}

          <div id='wrapper' style={{ display: 'flex', flexDirection: 'row' }}>
            <div id='game'>
              <Hero />

              <div id='run' style={{ borderStyle: 'solid' }}>Tu jest atak!</div>            {/*React component*/}
            </div>

            <div id='arsenal' style={{ borderStyle: 'solid' }}>Tu jest arsenal</div>        {/*React component*/}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
