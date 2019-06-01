import React, { useState } from 'react';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading';
import Paragraph from 'components/atoms/Paragraph';
import Button from 'components/atoms/Button';
import PieChart from 'components/molecules/PieChart';
import { Redirect } from 'react-router';
import { routes } from 'routes';

const Wrapper = styled.div`
  margin-top: 5vh;
  width: 70%;
`;

const StyledImage = styled.div`
  position: relative;
  background-image: url(${({ urlToImage }) => urlToImage});
  background-position: center;
  background-size: cover;
  height: 60vh;
  width: 100%;
`;

const StyledHeading = styled(Heading)`
  padding: 30px 0;
  /* text-shadow: 4px 4px 6px ${({ theme }) => theme.black}; */
  font-size: ${({ theme }) => theme.fontSize.xl};

  color: ${({ theme }) => theme.black};
`;

const StyledParagraph = styled(Paragraph)`
  padding: 20px 0;
  font-size: ${({ theme }) => theme.fontSize.m};
`;

const StyledReference = styled.a`
  display: block;
  padding: 20px 0;
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: ${({ theme }) => theme.bold};
  color: ${({ theme }) => theme.black};
  text-decoration: underline;
  cursor: pointer;
`;

const DetailsTemplate = props => {
  const [redirectOrNot, setRedirect] = useState(false);

  // console.log('url: ', props.location.item.url);

  return (
    <>
      {redirectOrNot && <Redirect to={routes.lowFake} />}
      {props.location && (
        <Wrapper>
          <StyledHeading>{props.location.item.title}</StyledHeading>
          <StyledImage urlToImage={props.location.item.urlToImage}>
            <PieChart big />
          </StyledImage>

          <StyledParagraph>{props.location.item.content.slice(0, -14)}</StyledParagraph>
          <StyledReference href={props.location.item.url} target="_blank">
            Check source
          </StyledReference>
          <Button onClick={() => setRedirect(true)}>Back</Button>
        </Wrapper>
      )}
    </>
  );
};

export default DetailsTemplate;
