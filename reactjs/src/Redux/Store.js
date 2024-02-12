import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import { CategoryReducer } from './Reducer/CategoryReducer';
import { ProductReducer, ProductReducerDetail } from './Reducer/ProductReducer';


const reducer = combineReducers({
    cat: CategoryReducer,
    pro: ProductReducer,
    pdetail:ProductReducerDetail

})
let initializeState = {}

// const middleware = [thunk]

//createStore
const store = createStore(reducer, initializeState, composeWithDevTools(applyMiddleware(thunk)))
export default store;