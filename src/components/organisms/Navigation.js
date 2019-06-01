import React from 'react';
import styled from 'styled-components';
import ButtonIcon from 'components/atoms/ButtonIcon';
import iconChecked from 'assets/icons/checked.png';
import iconWarning from 'assets/icons/warning.png';
import iconError from 'assets/icons/error.png';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';
import { routes } from 'routes';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  padding: 40px 0 25px;
  height: 100vh;
  width: 150px;
  /* background-color: ${({ theme, colorNav }) => theme[colorNav]}; */
  background-color: ${({ theme, colorNav }) => (colorNav ? theme[colorNav] : theme.home)};
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

const changeColorNav = props => {
  console.log(props);

  const activeColor = props.location.pathname.slice(1);
  return activeColor;
};

const Navigation = props => {
  // console.log(props);
  return (
    <Wrapper colorNav={changeColorNav(props)}>
      <StyledName>Hello</StyledName>

      <StyledLinkList>
        <li>
          <ButtonIcon as={NavLink} to={routes.lowFake} icon={iconChecked} />
        </li>
        <li>
          <ButtonIcon as={NavLink} to={routes.mediumFake} icon={iconWarning} />
        </li>
        <li>
          <ButtonIcon as={NavLink} to={routes.highFake} icon={iconError} />
        </li>
      </StyledLinkList>
    </Wrapper>
  );
};

export default withRouter(Navigation);
