import styled from 'styled-components';

export const Countdown = styled.p`
  margin: 10px;
  font-size: 56px;
  padding: 15px;
  border: 1px solid #515151;
  border-radius: 4px;
`;

export const ActivatedCountdown = Countdown.extend`
  background-color: #ffe2e5;
`;
