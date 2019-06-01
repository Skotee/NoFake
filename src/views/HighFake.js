import React from 'react';
import styled from 'styled-components';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card';
// chwilo details template
import DetailsTemplate from 'templates/DetailsTemplate';

const HighFake = () => {
  return (
    <GridTemplate>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </GridTemplate>
  );
};

export default HighFake;
