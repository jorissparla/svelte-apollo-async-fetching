import ApolloClient, { gql } from 'apollo-boost';
// import ApolloClient from 'apollo-client';
// import { InMemoryCache } from 'apollo-cache-inmemory';
// // import { WebSocketLink } from 'apollo-link-ws';
// import { split } from 'apollo-link';
// import { HttpLink } from 'apollo-link-http';

// const headers = { 'content-type': 'application/json' };
// const getHeaders = () => {
//   return headers;
// };

// const cache = new InMemoryCache();

// const httpLink = new HttpLink({
//   uri: 'http://nlbavwixs.infor.com:4000',
//   headers: getHeaders()
// });

// export const client = new ApolloClient({
//   link: httpLink,
//   cache
// });
export const GET_ACCOUNTS = gql`
  query accounts {
    accounts {
      fullname
      navid
    }
  }
`;

export const client = new ApolloClient({ uri: 'http://nlbavwixs.infor.com:4000' });
