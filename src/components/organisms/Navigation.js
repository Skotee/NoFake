import React from 'react';
import styled from 'styled-components';
import ButtonIcon from 'components/atoms/ButtonIcon';
import iconChecked from 'assets/icons/checked.png';
import iconWarning from 'assets/icons/warning.png';
import iconError from 'assets/icons/err.png';
import logo from 'assets/icons/logo.png';
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

const StyledName = styled.div`
  font-size: 20px;
  /* background-image: url(${logo}); */
  background-image: url(${({ logo }) => logo});
  /* background-image: url(${props => props.logo}); */
  /* width: 100px; */
  /* height: 100px; */
`;

const StyledLinkList = styled.ul`
  list-style: none;
  margin-top: 15vh;
`;

const changeColorNav = props => {
  const activeColor = props.location.pathname.slice(1);
  return activeColor;
};

const Navigation = props => {
  // console.log(props);
  return (
    <Wrapper colorNav={changeColorNav(props)}>
      {/* <StyledName>Hello</StyledName> */}
      <StyledName logo={logo}>No Fake</StyledName>
      <StyledLinkList>
        <li>
          <ButtonIcon as={NavLink} to={routes.lowFake} icon={iconChecked} activeclass="active" />
        </li>
        <li>
          <ButtonIcon as={NavLink} to={routes.mediumFake} icon={iconWarning} activeclass="active" />
        </li>
        <li>
          <ButtonIcon as={NavLink} to={routes.highFake} icon={iconError} activeclass="active" />
        </li>
      </StyledLinkList>
    </Wrapper>
  );
};

export default withRouter(Navigation);
