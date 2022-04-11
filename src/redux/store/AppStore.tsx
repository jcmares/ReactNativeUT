import {createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from '../reducers/RootReducer'


export default AppStore = createStore(reducers, applyMiddleware(thunk)) ;