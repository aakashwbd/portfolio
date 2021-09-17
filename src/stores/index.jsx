import {applyMiddleware, compose, createStore} from 'redux'
import thunk from 'redux-thunk'
import {createLogger} from 'redux-logger'
import rootReducers from './reducer'
// import {rootReducers} from './reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const middleWare = []
middleWare.push(thunk)

const loggerMiddleware = createLogger({
    predicate: () => process.env.NODE_ENV === 'development',
})

middleWare.push(loggerMiddleware)

const store = createStore(
    rootReducers,
    composeEnhancers(applyMiddleware(...middleWare))
)

export default store