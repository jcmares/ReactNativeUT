
import { Products, ProductsEdge } from '../../interfaces/ResponseDto';
import { ProdAction } from '../actions/CommonActions';

export interface ProductState  {
    products: ProductsEdge[];
}

const initialState: ProductState  = {
    products: {} as ProductsEdge[] 
};

const CommonReducer = (state :ProductState = initialState , action: ProdAction): ProductState =>{
    switch (action.type){
        case 'loadProducts' :
            return {... state , products: action.payload }
        default : 
            return state;
    }
}

export default CommonReducer;