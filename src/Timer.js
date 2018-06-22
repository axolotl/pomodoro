import React from 'react';

// import styles
import Text from './styles/Text';
import { Box } from './styles/Containers';
import { Countdown, ActivatedCountdown } from './styles/Countdown';

const PadZeros = num => {
  while (num.length < 2) {
    num = '0' + num;
  }
  return num;
};

const Timer = ({ timeRemaining, timerChangedAnimation, status }) => {
  const minutes = PadZeros(Math.floor(timeRemaining / 60).toString());
  const seconds = PadZeros((timeRemaining % 60).toString());

  return (
    <Box>
      <Text>Time Remaining</Text>

      {timerChangedAnimation === true ? (
        <ActivatedCountdown>
          {minutes} : {seconds}
        </ActivatedCountdown>
      ) : (
        <Countdown>
          {minutes} : {seconds}
        </Countdown>
      )}

      <Text style={{ marginBottom: 0 }} >Countdown is</Text>
      <Text>{status}</Text>
    </Box>
  );
};

export default Timer;
