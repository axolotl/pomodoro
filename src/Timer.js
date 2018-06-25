import React from 'react';

// import styles
import Text, { BoldText } from './styles/Text';
import { Box } from './styles/Containers';
import { Countdown } from './styles/Countdown';
import ModeText from './styles/ModeText';

const PadZeros = num => {
  while (num.length < 2) {
    num = '0' + num;
  }
  return num;
};

const Timer = ({ timeRemaining, timerChangedAnimation, status, mode }) => {
  const minutes = PadZeros(Math.floor(timeRemaining / 60).toString());
  const seconds = PadZeros((timeRemaining % 60).toString());

  return (
    <Box>
      <Text>
        <ModeText>{mode}</ModeText> timer is:
      </Text>
      <BoldText>{status}</BoldText>

      <Countdown animate={timerChangedAnimation ? 'animate' : ''}>
        {minutes} : {seconds}
      </Countdown>
    </Box>
  );
};

export default Timer;
