import React, {Reducer, useEffect, useState} from 'react';
import {Button, FlatList, Text, TextInput, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import { ProductState } from '../../redux/reducers/CommonReducer';
import { getProducts,  } from '../../redux/actions/CommonActions';
import {ProductsEdge} from '../../interfaces/ResponseDto';
import RootReducer from '../../redux/reducers/RootReducer';
import { combineReducers } from 'redux';
import CommonReducer from '../../redux/reducers/CommonReducer';



const Home = () => {
  const dispatch = useDispatch();
  const state = useSelector<ProductState, ProductsEdge[]>( (state) => state.products );
  const [products, setProducts] = useState<ProductsEdge[]>([]);

  useEffect(() => {
    console.log('****', JSON.stringify (state) )
    if (state){
      
      setProducts(state);
    }
    
  }, [state]);

  return (
    <View>
      <Text>Demo SQLite</Text>
      <Button
        onPress={() => {
          dispatch(getProducts());
        }}
        title="GET PRODUCTS"
      />

      <View style={{ flex: 1, backgroundColor: 'black'}}>
        <FlatList
          data={products}
          renderItem={({item}) => (
            <View>
              <Text>{item.node.description}</Text>
            </View>
          )}
          keyExtractor={item => item.node.id}
        />
      </View>
    </View>
  );
};

export default Home;
