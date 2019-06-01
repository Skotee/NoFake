import React, { Component } from 'react';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card';
import { connect } from 'react-redux';
import { fetchArticles, checkRisk as checkRiskAction, addVote as addVoteAction } from 'actions';

class LowFake extends Component {
  state = {
    like: false,
    unlike: false,
    whichArticle: '',
    render: false,
  };

  componentDidMount() {
    this.props.getArticles().then(() => this.props.checkRisk());
  }

  componentDidUpdate() {
    const { like, unlike, whichArticle, render } = this.state;
    // this.props.checkRisk(like, unlike, whichArticle);
    if (render) this.props.addVote(like, unlike, whichArticle, this.turnOffRender.bind(this));
  }

  likeArticle = whichArticle => {
    this.setState({ like: true, unlike: false, whichArticle, render: true });
  };

  unlikeArticle = whichArticle => {
    this.setState({ unlike: true, like: false, whichArticle, render: true });
  };

  turnOffRender() {
    this.setState({ render: false });
    // console.log('ok');
  }

  render() {
    return (
      <GridTemplate>
        {this.props.items &&
          this.props.items.map(item => {
            // console.log(item.urlToImage.lenght);
            if (!item.urlToImage || !item.description) return null;
            return (
              <Card
                key={item.title}
                title={item.title}
                url={item.url}
                urlToImage={item.urlToImage}
                content={item.content}
                likeArticle={this.likeArticle}
                unlikeArticle={this.unlikeArticle}
              />
            );
          })}
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
  // checkRisk: (like, unlike, whichArticle) => checkRiskAction(like, unlike, whichArticle),
  addVote: (like, unlike, whichArticle, turnOffRender) =>
    addVoteAction(like, unlike, whichArticle, turnOffRender),
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LowFake);
