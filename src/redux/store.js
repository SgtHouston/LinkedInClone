import { createStore, combineReducers } from "redux";

import { techarticles } from './reducers/techarticles'
import { posts } from './reducers/posts'
import { compose, applyMiddleware } from "@reduxjs/toolkit";
import thunkMiddleware from 'redux-thunk'
import { user } from './reducers/user'


// combines all existing reducers into a larger object
const rootReducer = combineReducers({
    techarticles,
    posts,
    user
})

const middleware = compose(
    applyMiddleware(thunkMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export const store = createStore(rootReducer, middleware)


