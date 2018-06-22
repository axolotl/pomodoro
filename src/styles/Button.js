import styled from 'styled-components';

const Button = styled.button`
  margin: 0;
  display: inline-block;
  border: none;
  text-decoration: none;
  background: white;
  outline: none;
  font-size: 18px;

  border: 1px solid transparent;

  transition: background 250ms ease-in-out, transform 150ms ease;
  -webkit-appearance: none;
  -moz-appearance: none;

  :hover {
    background: #ff4f4f;
  }
`;

export const ModeButtonSelected = Button.extend`
  border: 1px solid #ff4f4f;
`;

export default Button;
