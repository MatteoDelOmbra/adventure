import React from 'react';
import logo from './res/logo.svg';
import { Counter } from './features/counter/Counter';
import './styles/App.css';
import { Heroes } from './features/heroes/heroes';

function App() {
  return (
    <div className="App" style={{ borderStyle: 'solid', display: 'flex', flexDirection: 'row' }}>

      <div id='side-panel' style={{ borderStyle: 'solid', display: 'flex', flexDirection: 'column' }}>
        <div id='hero-list'>Tu będzie lista</div>                                         {/*React component*/}
        <button id='generate-mob'>Zmiana stworka</button>                                 {/*React component*/}
        <button id='region'>Zmiana regionu</button>                                       {/*React component*/}
      </div>

      <div id='main'>
        <div id='hero-creator' style={{ borderStyle: 'solid' }}>Tworzenie postaci</div>   {/*React component*/}
        <div id='wrapper' style={{ display: 'flex', flexDirection: 'row' }}>
          <div id='game'>
            <div id='hero-info' style={{ borderStyle: 'solid' }}>Tu są dane postaci</div> {/*React component*/}
            <div id='run' style={{ borderStyle: 'solid' }}>Tu jest atak!</div>            {/*React component*/}
          </div>

          <div id='arsenal' style={{ borderStyle: 'solid' }}>Tu jest arsenal</div>        {/*React component*/}
        </div>
      </div>
    </div>
  );
}

export default App;
