import React from 'react';
import Text from './styles/Text';
import { Box } from './styles/Containers';
import Start from './icons/Start';
import Pause from './icons/Pause';
import Restart from './icons/Restart';

const Controls = ({ start, pause, restart }) => (
  <Box>
    <Text>Select start, pause, or restart</Text>
    <div>
      <Start onClick={start} />
      <Pause onClick={pause} />
      <Restart onClick={restart} />
    </div>
  </Box>
);

export default Controls;
