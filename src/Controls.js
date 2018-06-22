import React from 'react';
import Text from './styles/Text';
import { Box } from './styles/Containers';
import Start from './icons/Start';
import Pause from './icons/Pause';
import Reset from './icons/Reset';

const Controls = ({ start, pause, reset }) => (
  <Box>
    <Text>Select start, pause, or reset</Text>
    <div>
      <Start onClick={start} />
      <Pause onClick={pause} />
      <Reset onClick={reset} />
    </div>
  </Box>
);

export default Controls;
