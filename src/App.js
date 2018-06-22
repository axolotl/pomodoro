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
    selection: {
      minutes: 25,
      seconds: 0
    },
    timeRemaining: 1500
  };

  adjust = (item, operation) => {
    const { [item]: current } = this.state.selection;
    const selection = {
      ...this.state.selection,
      [item]:
        operation === 'up'
          ? current === 59
            ? 59
            : current + 1
          : current === 0
            ? 0
            : current - 1
    };
    this.setState({ selection });
  };

  interval = () => this.setState({ timeRemaining: this.state.timeRemaining - 1 });

  start = () => {
    this.countdown = setInterval(() => this.interval(), 1000);
  };

  pause = () => {
    clearInterval(this.countdown);
  };

  restart = () => {
    const { minutes, seconds } = this.state.selection;
    clearInterval(this.countdown);
    this.setState({ timeRemaining: (minutes * 60) + seconds })
  };

  render() {
    const { selection, timeRemaining } = this.state;
    const { adjust, start, pause, restart } = this;

    return (
      <Align>
        <Title>Pomodoro Clock</Title>
        <AdjustTime adjust={adjust} selection={selection} />
        <Controls start={start} pause={pause} restart={restart} />
        <Timer timeRemaining={timeRemaining} />
      </Align>
    );
  }
}

export default App;
