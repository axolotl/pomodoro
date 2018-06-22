import React, { Component } from 'react';

// import components
import Increment from './icons/Increment';
import Decrement from './icons/Decrement';

// import styles
import Time from './styles/Time';
import Text from './styles/Text';
import { TimeColumn, TimeColumnsWrapper } from './styles/Containers';

class AdjustTime extends Component {
  render() {
    const { minutes, seconds } = this.props.selection;
    const { adjust } = this.props;

    return (
      <div>
        <Text>Adjust minutes and seconds</Text>
        <TimeColumnsWrapper>
          <TimeColumn>
            <Increment onClick={() => adjust('minutes', 'up')} />
            <Time>{minutes}</Time>
            <Decrement onClick={() => adjust('minutes', 'down')} />
          </TimeColumn>

          <TimeColumn>
            <Time>:</Time>
          </TimeColumn>

          <TimeColumn>
            <Increment onClick={() => adjust('seconds', 'up')} />
            <Time>{seconds}</Time>
            <Decrement onClick={() => adjust('seconds', 'down')} />
          </TimeColumn>
        </TimeColumnsWrapper>
      </div>
    );
  }
}

export default AdjustTime;
