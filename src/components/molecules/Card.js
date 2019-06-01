import React, { Component } from 'react';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading';
import Paragraph from 'components/atoms/Paragraph';
import PieChart from 'components/molecules/PieChart';
import { Redirect } from 'react-router-dom';
import { routes } from 'routes';

const Wrapper = styled.div`
  min-height: 200px;
  max-height: 40vh;
  background-color: ${({ theme }) => theme.grey};
  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.5);
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
`;

const StyledImage = styled.div`
  position: relative;
  background-image: url(${({ urlToImage }) => urlToImage});
  background-position: center;
  background-size: cover;
  height: 200px;
  width: 100%;
`;

const StyledHeading = styled(Heading)`
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 5px 10px;
  line-height: 20px;
  text-shadow: 4px 4px 6px ${({ theme }) => theme.black};

  color: ${({ theme }) => theme.grey};
  /* border-bottom: 1px solid ${({ theme }) => theme.black}; */
`;

const StyledParagraph = styled(Paragraph)`
  padding: 10px;
`;

class Card extends Component {
  state = {
    redirect: false,
  };

  handleClick = () => this.setState({ redirect: true });

  render() {
    const { redirect } = this.state;
    const { title, url, urlToImage, content } = this.props;

    if (redirect) {
      return (
        <Redirect
          to={{
            pathname: routes.detailsPage,
            item: { title, url, urlToImage, content },
          }}
        />
      );
    }

    return (
      <Wrapper onClick={this.handleClick}>
        <StyledImage urlToImage={urlToImage}>
          <PieChart />
          <StyledHeading>{title}</StyledHeading>
        </StyledImage>
        <StyledParagraph>{content && `${content.slice(0, 100)}...`}</StyledParagraph>
      </Wrapper>
    );
  }
}

export default Card;
