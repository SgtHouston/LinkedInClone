import { createStore, combineReducers } from "redux";
// import { posts } from './reducers/posts'
import { techarticles } from './reducers/techarticles'
import { posts } from './reducers/posts'

// combines all existing reducers into a larger object
const rootReducer = combineReducers({
    techarticles,
    posts
})

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


