import React, { Component } from 'react';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card';
import { connect } from 'react-redux';
import { fetchArticles } from 'actions';

class LowFake extends Component {
  componentDidMount() {
    this.props.getArticles();
  }

  render() {
    console.log(this.props.items);

    return (
      <GridTemplate>
        {this.props.items &&
          this.props.items.map(item => (
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
  }
}

const mapStateToProps = state => {
  const { json } = state;
  return { items: json };
};
const mapDispatchToProps = {
  getArticles: fetchArticles,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LowFake);
