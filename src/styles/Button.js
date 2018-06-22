import styled from 'styled-components';

const Button = styled.button`
  margin: 5px;
  display: inline-block;
  border: none;
  text-decoration: none;
  background: white;
  outline: none;

  transition: background 250ms ease-in-out, transform 150ms ease;
  -webkit-appearance: none;
  -moz-appearance: none;

  :hover {
    background: #ff4f4f;
  }
`;

export default Button;
