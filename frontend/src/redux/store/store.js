import {createStore, combineReducers, applyMiddleware, compose} from 'react';
import thunk from 'redux-thunk'
import { createBookReducer } from '../reducers/book';


const middleware = [thunk]

const reducers = combineReducers({
    bookReducer: createBookReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(...middleware)));

export { store };