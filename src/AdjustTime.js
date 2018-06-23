import React, { Component } from 'react';

// import components
import Increment from './icons/Increment';
import Decrement from './icons/Decrement';

// import styles
import Time from './styles/Time';
import Text, { BoldText } from './styles/Text';
import {
  TimeColumnsWrapper,
  Box,
  BoxVertical,
  TimerBox
} from './styles/Containers';
import Button, { ModeButtonSelected } from './styles/Button';

class AdjustTime extends Component {
  render() {
    const { workFor, breakFor, setMode, adjust, mode } = this.props;

    return (
      <div>
        <Text>
          Adjust minutes and seconds. Click on Work or Break to select mode.
        </Text>

        <TimeColumnsWrapper>
          <TimerBox>
            {mode === 'Work' ? (
              <ModeButtonSelected onClick={() => setMode('Work')}>
                <BoldText>Work</BoldText>
              </ModeButtonSelected>
            ) : (
              <Button onClick={() => setMode('Work')}>
                <BoldText>Work</BoldText>
              </Button>
            )}

            <BoxVertical>
              <Box>
                <Increment onClick={() => adjust('workFor', 'minutes', 'up')} />
                <Time>{workFor.minutes}</Time>
                <Decrement onClick={() => adjust('workFor', 'minutes', 'down')} />
              </Box>

              <Box>
                <Time>:</Time>
              </Box>

              <Box>
                <Increment onClick={() => adjust('workFor', 'seconds', 'up')} />
                <Time>{workFor.seconds}</Time>
                <Decrement onClick={() => adjust('workFor', 'seconds', 'down')} />
              </Box>
            </BoxVertical>
          </TimerBox>

          <TimerBox>
            {mode === 'Break' ? (
              <ModeButtonSelected onClick={() => setMode('Break')}>
                <BoldText>Break</BoldText>
              </ModeButtonSelected>
            ) : (
              <Button onClick={() => setMode('Break')}>
                <BoldText>Break</BoldText>
              </Button>
            )}

            <BoxVertical>
              <Box>
                <Increment onClick={() => adjust('breakFor', 'minutes', 'up')} />
                <Time>{breakFor.minutes}</Time>
                <Decrement onClick={() => adjust('breakFor', 'minutes', 'down')} />
              </Box>

              <Box>
                <Time>:</Time>
              </Box>

              <Box>
                <Increment onClick={() => adjust('breakFor', 'seconds', 'up')} />
                <Time>{breakFor.seconds}</Time>
                <Decrement onClick={() => adjust('breakFor', 'seconds', 'down')} />
              </Box>
            </BoxVertical>
          </TimerBox>
        </TimeColumnsWrapper>
      </div>
    );
  }
}

export default AdjustTime;
