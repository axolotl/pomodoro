import styled from 'styled-components';

const Text = styled.p`  
  text-align: center;
  max-width: 300px;
  margin: 5px 0;
`;

export const BoldText = Text.extend`
  font-weight: bold;
`;

export default Text;