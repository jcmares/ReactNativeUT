import {ApolloClient, ApolloQueryResult, InMemoryCache} from '@apollo/client';
import { Data } from '../interfaces/ResponseDto';
import {GET_PRODUCTS,} from './Schema';

const cache = new InMemoryCache();

const client = new ApolloClient({
  uri: 'https://luebbert-store-development-3.myshopify.com/api/graphql',
  headers: {
    'X-Shopify-Storefront-Access-Token': 'd3cb850790be29a869d5f444265a1322',
  },
  cache,
});

export default class GraphQLAPI {
  getProducts(page: number = 20, callback : ( data: Data ) => void ) {
    {
      client
        .query({query: GET_PRODUCTS})
        .then(res => {
          
          const result: ApolloQueryResult<Data> =  res;
          
          callback( result.data);
          
        })
        .catch(err => {
          console.error(err);
        });
    }
  }
}
