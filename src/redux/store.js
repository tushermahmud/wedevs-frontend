



import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension' 
// import { productReducers } from './reducers/productReducers'
import { productsReducer, newProductReducer, productReducer, productDetailsReducer, newReviewReducer, productReviewsReducer, reviewReducer } from './reducers/productReducers'

import { authReducer, userRegistrationReducers} from './reducers/authReducers'

const reducer = combineReducers({
    productsReducer,
    newProductReducer,
    productReducer,
    authReducer,
    userRegistrationReducers,
});

const userInfo= localStorage.getItem("token");
const initialState = {
    userInfo:userInfo
};

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))


export default store;