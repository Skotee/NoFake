import React, { Component } from 'react';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card';
import { connect } from 'react-redux';
import { fetchArticles, checkRisk as checkRiskAction } from 'actions';

class HighFake extends Component {
  componentDidMount() {
    this.props.getArticles().then(() => this.props.checkRisk());
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
  checkRisk: checkRiskAction,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HighFake);
