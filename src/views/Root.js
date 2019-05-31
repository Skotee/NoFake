import React from 'react';
import styled from 'styled-components';
import MainTemplate from 'templates/MainTemplate';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card';
// chwilo details template
import DetailsTemplate from 'templates/DetailsTemplate';

const Root = () => {
  return (
    <MainTemplate>
      {/* </Navigation> */}
      {/* <GridTemplate>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </GridTemplate> */}
      <DetailsTemplate />
    </MainTemplate>
  );
};

export default Root;
