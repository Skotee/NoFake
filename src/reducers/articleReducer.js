import {
    FETCH_ARTICLES_BEGIN,
    FETCH_ARTICLES_SUCCESS,
    FETCH_ARTICLES_FAILURE,
    REQUEST_ARTICLES,
    RECEIVE_ARTICLES
} from '../actions';

const initialState = {
    items: [],
    loading: false,
    error: null
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_ARTICLES_BEGIN:
            // Mark the state as "loading" so we can show a spinner or something
            // Also, reset any errors. We're starting fresh.
            return {
                ...state,
                loading: true,
                    error: null
            };

        case FETCH_ARTICLES_SUCCESS:
            // All done: set loading "false".
            // Also, replace the items with the ones from the server
            return {
                ...state,
                loading: false,
                    items: action.payload.articles
            };

        case FETCH_ARTICLES_FAILURE:
            // The request failed. It's done. So set loading to "false".
            // Save the error, so we can display it somewhere.
            // Since it failed, we don't have items to display anymore, so set `items` empty.
            //
            // This is all up to you and your app though:
            // maybe you want to keep the items around!
            // Do whatever seems right for your use case.
            return {
                ...state,
                loading: false,
                    error: action.payload.error,
                    items: []
            };

        case REQUEST_ARTICLES:
            return {
                ...state,
                loading: true
            };

        case RECEIVE_ARTICLES:
            return {
                ...state,
                json: action.json,
                loading: false
            };
        default:
            // ALWAYS have a default case in a reducer
            return state;
    }
}