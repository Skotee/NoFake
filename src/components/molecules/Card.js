import React, { Component } from 'react';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading';
import Paragraph from 'components/atoms/Paragraph';
import PieChart from 'components/molecules/PieChart';

const Wrapper = styled.div`
  min-height: 200px;
  max-height: 40vh;
  background-color: ${({ theme }) => theme.grey};
  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.5);
  border-radius: 10px;
  overflow: hidden;
`;

const StyledImage = styled.div`
  position: relative;
  background-image: url('https://ocdn.eu/pulscms-transforms/1/AotktkqTURBXy80Y2FiZjcxYmI2ZmQ5YjFhNTdmYWY3OTA0ZGRmMjdlMy5qcGVnk5UDAB_NA-jNAjKTBc0DFM0BvJUH2TIvcHVsc2Ntcy9NREFfLzE0MGIxY2ZlN2YwYWM1MmVkYzAxMGQ3MDk3OGU4NGJlLnBuZwDCAA');
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

    if (redirect) {
      // return <Redirect to="asd" />;
    }

    return (
      <Wrapper onClick={this.handleClick}>
        <StyledImage>
          <PieChart />
          <StyledHeading>Zbiorowy pozew przeciw szpitalowi. Zakażeni pacjenci zmarli</StyledHeading>
        </StyledImage>
        <StyledParagraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nulla ipsum, lacinia a urna
          et, interdum volutpat ipsum.
        </StyledParagraph>
      </Wrapper>
    );
  }
}

export default Card;
