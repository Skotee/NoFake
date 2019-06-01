import React from 'react';
import styled from 'styled-components';
import ButtonIcon from 'components/atoms/ButtonIcon';
import iconChecked from 'assets/icons/checked.png';
import { NavLink } from 'react-router-dom';
import { routes } from 'routes';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  padding: 40px 0 25px;
  height: 100vh;
  width: 150px;
  background-color: ${({ theme }) => theme.medium};
  /* background-color: ${({ activeColor, theme }) =>
    activeColor ? theme[activeColor] : theme.note}; */

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const StyledName = styled.h1`
  font-size: 20px;
`;

const StyledLinkList = styled.ul`
  list-style: none;
  margin-top: 15vh;
`;

const Navigation = () => {
  return (
    <Wrapper>
      <StyledName>Hello</StyledName>

      <StyledLinkList>
        <li>
          <ButtonIcon as={NavLink} to={routes.highFake} icon={iconChecked} />
        </li>
        <li>
          <ButtonIcon as={NavLink} to={routes.mediumFake} icon={iconChecked} />
        </li>
        <li>
          <ButtonIcon as={NavLink} to={routes.lowFake} icon={iconChecked} />
        </li>
      </StyledLinkList>
    </Wrapper>
  );
};

export default Navigation;
