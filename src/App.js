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
    timeRemaining: 1500,
    timerChangedAnimation: false,
    status: 'ready to start'
  };

  adjust = (item, operation) => {
    const { [item]: current } = this.state.selection;
    let { timeRemaining } = this.state;
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
    if (this.state.status === 'ready to start') {
      timeRemaining = selection.minutes * 60 + selection.seconds;
    }
    this.setState({ selection, timeRemaining });
  };

  interval = () =>
    this.setState({ timeRemaining: this.state.timeRemaining - 1 });

  animateChangeTimer = () => {
    this.setState({ timerChangedAnimation: true });
    setTimeout(() => this.setState({ timerChangedAnimation: false }), 200);
  };

  start = () => {
    this.animateChangeTimer();
    this.countdown = setInterval(() => this.interval(), 1000);
    this.setState({ status: 'active' });
  };

  pause = () => {
    clearInterval(this.countdown);
    this.animateChangeTimer();
    if (this.state.status === 'active') {
      this.setState({ status: 'paused' });
    }
  };

  reset = () => {
    const { minutes, seconds } = this.state.selection;
    clearInterval(this.countdown);
    this.animateChangeTimer();
    this.setState({
      timeRemaining: minutes * 60 + seconds,
      status: 'ready to start'
    });
  };

  render() {
    const {
      selection,
      timeRemaining,
      timerChangedAnimation,
      status
    } = this.state;
    const { adjust, start, pause, reset } = this;

    return (
      <Align>
        <Title>Pomodoro Clock</Title>
        <AdjustTime adjust={adjust} selection={selection} />
        <Controls start={start} pause={pause} reset={reset} />
        <Timer
          timeRemaining={timeRemaining}
          timerChangedAnimation={timerChangedAnimation}
          status={status}
        />
      </Align>
    );
  }
}

export default App;
