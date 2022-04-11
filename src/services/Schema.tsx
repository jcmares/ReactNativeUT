import {gql} from '@apollo/client';

export const GET_PRODUCTS = gql`
{
  shop {
    name
    description
    products(first: 20) {
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
      edges {
        cursor
        node {
          id
          title
          description
          availableForSale
          productType
          onlineStoreUrl
          options {
            id
            name
            values
          }
          variants(first: 250) {
            pageInfo {
              hasNextPage
              hasPreviousPage
            }
            edges {
              node {
                id
                title
                selectedOptions {
                  name
                  value
                }
                image(maxHeight: 1600, maxWidth: 750) {
                  src
                }
                price
                compareAtPrice
              }
            }
          }
          images(first: 250, maxHeight: 1600, maxWidth: 750) {
            pageInfo {
              hasNextPage
              hasPreviousPage
            }
            edges {
              node {
                src
              }
            }
          }
        }
      }
    }
  }
}
`;
