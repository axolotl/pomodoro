import styled from 'styled-components';

export const Align = styled.div`
  padding-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: sans;
`;

export const TimeColumnsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const BoxVertical = Box.extend`
  flex-direction: row;
`;

export const TimerBox = styled.div`
  margin: 0 15px;
  display: flex;
  flex-direction: column;
`;