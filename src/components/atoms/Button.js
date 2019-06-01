import styled from 'styled-components';

const Button = styled.button`
  padding: 10px 40px;
  border-radius: 15px;
  background-color: yellowgreen;
  border: none;
  color: ${({ theme }) => theme.white};
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: ${({ theme }) => theme.bold};
  cursor: pointer;
`;

export default Button;
