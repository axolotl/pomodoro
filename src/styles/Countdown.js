import styled from 'styled-components';

export const Countdown = styled.p`
  margin: 10px;
  font-size: 56px;
  padding: 15px;
  border: 1px solid #515151;
  border-radius: 4px;

  transition: background 250ms ease-in-out, transform 150ms ease;
  -webkit-appearance: none;
  -moz-appearance: none;

  background: ${props => props.animate ? '#ff4f4f' : 'white'};
`;
