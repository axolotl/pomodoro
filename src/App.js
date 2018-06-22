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
    workFor: {
      minutes: 25,
      seconds: 0
    },
    breakFor: {
      minutes: 5,
      seconds: 0
    },
    timeRemaining: 1500,
    timerChangedAnimation: false,
    status: 'ready to start',
    mode: 'Work'
  };

  adjust = (mode, item, operation) => {
    // const { [mode]: selection } = this.state;
    // console.log(selection)

    const { [item]: current } = this.state[mode];
    console.log(current)
    let { timeRemaining } = this.state;
    const newState = {
      ...this.state[mode],
      [item]:
        operation === 'up'
          ? current === 59
            ? 59
            : current + 1
          : current === 0
            ? 0
            : current - 1
    };
    // if (this.state.status === 'ready to start') {
    //   timeRemaining = selection.minutes * 60 + selection.seconds;
    // }
    console.log(newState)
    this.setState({ [mode]: newState, timeRemaining });
  };

  interval = () => {
    const { timeRemaining } = this.state;
    if (timeRemaining > 0) {
      this.setState({ timeRemaining: timeRemaining - 1 });
    } else {
      clearInterval(this.countdown);
      this.setState({ status: 'ready to start' });
    }
  };

  animateChangeTimer = () => {
    this.setState({ timerChangedAnimation: true });
    setTimeout(() => this.setState({ timerChangedAnimation: false }), 150);
  };

  start = () => {
    this.animateChangeTimer();
    if (this.state.status !== 'active') {
      this.countdown = setInterval(() => this.interval(), 1000);
      this.setState({ status: 'active' });
    }
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

  setMode = mode => {
    this.setState({ mode });
  };

  render() {
    const {
      selection,
      workFor,
      breakFor,
      timeRemaining,
      timerChangedAnimation,
      status,
      mode
    } = this.state;
    const { adjust, start, pause, reset, setMode } = this;

    return (
      <Align>
        <Title>Pomodoro Clock</Title>
        <AdjustTime
          adjust={adjust}
          selection={selection}
          workFor={workFor}
          breakFor={breakFor}
          mode={mode}
          setMode={setMode}
        />
        <Controls start={start} pause={pause} reset={reset} />
        <Timer
          timeRemaining={timeRemaining}
          timerChangedAnimation={timerChangedAnimation}
          status={status}
          mode={mode}
        />
      </Align>
    );
  }
}

export default App;
