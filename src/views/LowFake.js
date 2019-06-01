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
  };

  componentDidMount() {
    this.props.getArticles().then(() => this.props.checkRisk());
  }

  componentDidUpdate() {
    const { like, unlike, whichArticle } = this.state;
    // this.props.checkRisk(like, unlike, whichArticle);
    this.props.addVote(like, unlike, whichArticle);
  }

  likeArticle = whichArticle => {
    this.setState({ like: true, unlike: false, whichArticle });
  };

  unlikeArticle = whichArticle => {
    this.setState({ unlike: true, like: false, whichArticle });
  };

<<<<<<< HEAD
  turnOffRender() {
    this.setState({ render: false });
  }

=======
>>>>>>> 33ea0829a74b6149bd6f0275a4b89931fa2d2d0a
  render() {
    return (
      <GridTemplate>
        {this.props.items &&
          this.props.items.map(item => {
            if(item.urlToImage !== '' && item.description !== '')
            {
              return(
                <Card
                  key={item.title}
                  title={item.title}
                  url={item.url}
                  urlToImage={item.urlToImage}
                  content={item.content}
                  likeArticle={this.likeArticle}
                  unlikeArticle={this.unlikeArticle}
                />
              )
            }
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
  // checkRisk: checkRiskAction,
  checkRisk: (like, unlike, whichArticle) => checkRiskAction(like, unlike, whichArticle),
  addVote: (like, unlike, whichArticle) => addVoteAction(like, unlike, whichArticle),
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LowFake);
