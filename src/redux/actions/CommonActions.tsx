import Types from '../types/Types';
import GraphQLAPI from '../../services/GraphQLAPI';
import { Products, ProductsEdge } from '../../interfaces/ResponseDto';


export type ProdAction = {
  type: 'loadProducts',
  payload : ProductsEdge[]
}

export const getProducts = () => {
  const service = new GraphQLAPI();
  return (dispatch: (action: ProdAction) => void) => {
    service.getProducts( 20,  (data) => { 
      
      dispatch({ type: 'loadProducts', payload: data.shop.products.edges })
    });

  };
};



