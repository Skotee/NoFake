import {
  FETCH_ARTICLES_BEGIN,
  FETCH_ARTICLES_SUCCESS,
  FETCH_ARTICLES_FAILURE,
  REQUEST_ARTICLES,
  RECEIVE_ARTICLES,
} from '../actions';

const initialState = {
  items: [
    {
      source: {
        id: null,
        name: 'Hopetribune.com',
      },
      author: null,
      title:
        'New Cybersecurity Software Provides Advanced Methods of Protection Against Cyber Attacks – Hope Tribune',
      description:
        'New Cybersecurity Software Provides Advanced Methods of Protection Against Cyber Attacks. Los Angeles, CA – May 31st, 2019 – ITinvestigator, announced today the launch of their new software: The Cybersecurity Robot for individuals and businesses. The Robot is…',
      url:
        'http://news.hopetribune.com/story/162046/new-cybersecurity-software-provides-advanced-methods-of-protection-against-cyber-attacks.html',
      urlToImage: null,
      publishedAt: '2019-06-01T01:17:00Z',
      content:
        'Los Angeles, CA – May 31st, 2019 – ITinvestigator, announced today the launch of their new software: The Cybersecurity Robot for individuals and businesses.\r\nThe Robot is the first of its kind security solution, that surpasses standard anti-virus and anti-mal… [+2753 chars]',
    },
    {
      source: {
        id: 'crypto-coins-news',
        name: 'Crypto Coins News',
      },
      author: 'Francois Aure',
      title: 'Billionaires Are ‘Scouring the Market’ to Own 25% of Bitcoin in Circulation',
      description:
        'By CCN: The appetite among billionaires for bitcoin is huge as ever, according to Eleesa Dadian, an art dealer and head of a secretive network for billionaire investors called the Dadiani Syndicate, in Forbes. The company has reportedly been instructed to pur…',
      url:
        'https://www.ccn.com/billionaires-are-scouring-the-market-to-own-25-of-bitcoin-in-circulation',
      urlToImage: 'https://www.ccn.com/wp-content/uploads/2019/05/suit-bitcoin-shutterstock.jpg',
      publishedAt: '2019-06-01T01:15:16Z',
      content:
        'By CCN: The appetite among billionaires for bitcoin is huge as ever, according to Eleesa Dadian, an art dealer and head of a secretive network for billionaire investors called the Dadiani Syndicate, in Forbes. The company has reportedly been instructed to pur… [+3246 chars]',
    },
    {
      source: {
        id: null,
        name: 'Newsbtc.com',
      },
      author: 'Tony Spilotro',
      title: 'Why All Bitcoin and Crypto Investors Should Consider U2F Security Keys',
      description:
        'The Chief Information Security Officer at Coinbase, Philip Martin, has revealed that the firm has enabled its Coinbase and Coinbase Pro accounts to support securing Bitcoin and other crypto assets using U2F Security Keys – a safer, and somewhat ironclad alter…',
      url:
        'https://www.newsbtc.com/2019/06/01/why-all-bitcoin-and-crypto-investors-should-consider-u2f-security-keys/',
      urlToImage:
        'https://www.newsbtc.com/wp-content/uploads/2019/05/bitcoin-crypto-u2f-security-key-coinbase-shutterstock_672392776-860x481.jpg',
      publishedAt: '2019-06-01T01:01:27Z',
      content:
        'The Chief Information Security Officer at Coinbase, Philip Martin, has revealed that the firm has enabled its Coinbase and Coinbase Pro accounts to support securing Bitcoin and other crypto assets using U2F Security Keys a safer, and somewhat ironclad alterna… [+3869 chars]',
    },
  ],
  loading: false,
  error: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ARTICLES_BEGIN:
      // Mark the state as "loading" so we can show a spinner or something
      // Also, reset any errors. We're starting fresh.
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_ARTICLES_SUCCESS:
      // All done: set loading "false".
      // Also, replace the items with the ones from the server
      return {
        ...state,
        loading: false,
        items: action.payload.articles,
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
        items: [],
      };

    case REQUEST_POSTS:
      return {
        ...state,
        loading: true,
      };

    case RECEIVE_POSTS:
      return {
        ...state,
        json: action.json,
        loading: false,
      };
    default:
      // ALWAYS have a default case in a reducer
      return state;
  }
}
