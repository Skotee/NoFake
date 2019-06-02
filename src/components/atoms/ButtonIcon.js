import styled from 'styled-components';
// import {MdDone} from 'react-icons/fa';

const ButtonIcon = styled.button`
  display: block;
  width: 67px;
  height: 67px;
  border-radius: 20px;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 50%;
  border: none;
  background-color: transparent;
  margin: 20px 0;

  &.active {
    background-color: white;
  }
`;

export default ButtonIcon;
