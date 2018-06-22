import React, { Component } from 'react';
import { injectGlobal } from 'styled-components';

// import styles
import { Align } from './styles/Containers';
import Title from './styles/Title';

// import components
import AdjustTime from './AdjustTime';
import Controls from './Controls';
import Timer from './Timer';

injectGlobal`
  html, body, #root {
    margin: 0;
    height: 100%;
  }
`;

class App extends Component {
  state = {
    timeRemaining: 1500,
  }

  render() {
    const { timeRemaining } = this.state;

    return (
      <Align>
        <Title>Pomodoro Clock</Title>
        <AdjustTime />
        <Controls />
        <Timer timeRemaining={timeRemaining} />
      </Align>
    );
  }
}

export default App;
