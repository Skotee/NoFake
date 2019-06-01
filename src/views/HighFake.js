import React from 'react';
import styled from 'styled-components';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card';
// chwilo details template
import DetailsTemplate from 'templates/DetailsTemplate';
import { connect } from 'react-redux';

const HighFake = ({ items }) => {
  return (
    <GridTemplate>
      {items.map(item => (
        <Card
          key={item.title}
          title={item.title}
          url={item.url}
          urlToImage={item.urlToImage}
          content={item.content}
        />
      ))}
    </GridTemplate>
  );
};

const mapStateToProps = state => {
  const { items } = state;
  return { items };
};

export default connect(mapStateToProps)(HighFake);
