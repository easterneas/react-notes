// import { createStore, combineReducers, applyMiddleware } from 'redux'
// import thunk from 'redux-thunk'
import { init } from '@rematch/core';

import { base } from './models/base';
import { genres } from './models/genres';
import { movies } from './models/movies';
import { studios } from './models/studios';


// import baseReducer from './reducers/baseReducer'

// const enhancer = applyMiddleware(thunk)
// const reducers = combineReducers({
//   baseReducer
// })

// const store = createStore(reducers, enhancer)

const store = init({
  models: { base, movies, studios, genres }
});

export default store
