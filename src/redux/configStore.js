import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { connectRouter } from 'connected-react-router';

import User from '../redux/modules/user';
import Post from '../redux/modules/post';
import Wish from '../redux/modules/wish';
import Image from '../redux/modules/image';
import Comment from '../redux/modules/comment';

export const history = createBrowserHistory();

const rootReducer = combineReducers({
  user: User,
  post: Post,
  wish: Wish,
  image: Image,
  comment: Comment,
  router: connectRouter(history),
});

const middlewares = [thunk.withExtraArgument({ history: history })];

const env = process.env.NODE_ENV;

if (env === 'development') {
  const { logger } = require('redux-logger');
  middlewares.push(logger);
}

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(...middlewares));

const store = (initialStore) => createStore(rootReducer, enhancer);

export default store();
