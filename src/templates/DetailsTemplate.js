import React from 'react';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading';
import Paragraph from 'components/atoms/Paragraph';
import Button from 'components/atoms/Button';
import PieChart from 'components/molecules/PieChart';

const Wrapper = styled.div`
  margin-top: 5vh;
  width: 70%;
`;

const StyledImage = styled.div`
  position: relative;
  background-image: url('https://ocdn.eu/pulscms-transforms/1/AotktkqTURBXy80Y2FiZjcxYmI2ZmQ5YjFhNTdmYWY3OTA0ZGRmMjdlMy5qcGVnk5UDAB_NA-jNAjKTBc0DFM0BvJUH2TIvcHVsc2Ntcy9NREFfLzE0MGIxY2ZlN2YwYWM1MmVkYzAxMGQ3MDk3OGU4NGJlLnBuZwDCAA');
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

const DetailsTemplate = () => {
  return (
    <Wrapper>
      <StyledHeading>Zbiorowy pozew przeciw szpitalowi. Zakażeni pacjenci zmarli</StyledHeading>
      <StyledImage>
        <PieChart big />
      </StyledImage>

      <StyledParagraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nulla ipsum, lacinia a urna
        et, interdum volutpat ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
        nulla ipsum, lacinia a urna et, interdum volutpat ipsum. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Duis nulla ipsum, lacinia a urna et, interdum volutpat ipsum.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nulla ipsum, lacinia a urna
        et, interdum volutpat ipsum.
      </StyledParagraph>
      <Button>Back</Button>
    </Wrapper>
  );
};

export default DetailsTemplate;
