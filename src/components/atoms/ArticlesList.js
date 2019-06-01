import React from "react";
import { connect } from "react-redux";
import { fetchArticles } from "../../actions";

let ArticlesList = ({ getArticles }) => (
    <button 
        onClick={ () => { getArticles() }} >
        Get news
    </button>
);

// class ArticlesList extends React.Component {
//   componentDidMount() {
//     this.props.dispatch(fetchArticles());
//   }

//   render() {
//     const { error, loading, articles } = this.props;

//     if (error) {
//       return <div>Error! {error.message}</div>;
//     }

//     if (loading) {
//       return <div>Loading...</div>;
//     }

//     return (
//       <ul>
//         {articles.map(article =>
//           <li key={article.id}>{article.name}</li>
//         )}
//       </ul>
//     );
//   }
// }

// const mapStateToProps = state => ({
//   products: state.products.items,
//   loading: state.products.loading,
//   error: state.products.error
// });

// export default connect(mapStateToProps)(ArticlesList);

const mapStateToProps = (state) => ({
    channel: state.channel
})
const mapDispatchToProps = {
    getPosts: fetchArticles
}
ArticlesList = connect(mapStateToProps, mapDispatchToProps)(ArticlesList)
export default ArticlesList;