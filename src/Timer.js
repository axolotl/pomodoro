import React from 'react';

// import styles
import Text from './styles/Text';
import { Box } from './styles/Containers';
import Countdown from './styles/Countdown';

const PadZeros = num => {
  while (num.length < 2) {
    num = '0' + num;
  };
  return num
};

const Timer = ({ timeRemaining }) => {
  const minutes = PadZeros((Math.floor(timeRemaining) / 60).toString());
  const seconds = PadZeros((timeRemaining % 60).toString());

  return (
    <Box>
      <Text>Time Remaining</Text>
      <Countdown>
        {minutes} : {seconds}
      </Countdown>
    </Box>
  );
};

export default Timer;
