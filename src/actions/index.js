import axios from 'axios';
import store from '../store/configStore';

export const FETCH_ARTICLES_BEGIN = 'FETCH_ARTICLES_BEGIN';
export const FETCH_ARTICLES_SUCCESS = 'FETCH_ARTICLES_SUCCESS';
export const FETCH_ARTICLES_FAILURE = 'FETCH_ARTICLES_FAILURE';
export const REQUEST_ARTICLES = 'REQUEST_ARTICLES';
export const RECEIVE_ARTICLES = 'RECEIVE_ARTICLES';

const API_KEY = '76e4c10dba1e4b2f9510e6b97d1afe09';

export const fetchArticlesBegin = () => ({
  type: FETCH_ARTICLES_BEGIN,
});

export const fetchArticlesSuccess = articles => ({
  type: FETCH_ARTICLES_SUCCESS,
  payload: {
    articles,
  },
});

export const fetchArticlesFailure = error => ({
  type: FETCH_ARTICLES_FAILURE,
  payload: {
    error,
  },
});

export const requestArticles = () => ({
  type: REQUEST_ARTICLES,
});

export const receivedArticles = json => ({
  type: RECEIVE_ARTICLES,
  json: json.articles,
});

export function fetchArticles() {
  return function(dispatch) {
    dispatch(requestArticles());
    return (
      axios
        .get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`)
        // .get(`https://newsapi.org/v2/sources?category=science&apiKey=${API_KEY}`)
        .then(
          response => console.log(response.data),
          // response => response.data,
          // error => console.log('An error occurred.', error),
        )
        .then(json => {
          dispatch(receivedArticles(json));
        })
    );
  };
}

export function checkRisk() {
  return function(dispatch) {
    const items = store.getState().json;

    console.log('stan lalla: ', items);
  };
}
