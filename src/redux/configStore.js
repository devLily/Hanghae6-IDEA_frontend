import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";
import { connectRouter } from "connected-react-router";

<<<<<<< HEAD
import User from "../redux/modules/user";
import Post from "../redux/modules/post";
import Wish from "../redux/modules/wish";
=======
import User from "./modules/user";
import Post from "./modules/post";
import Wish from "./modules/wish";
import Image from "./modules/image";
>>>>>>> 60ac55797b59900453ed884bbf15b5b5ed37b8b0

export const history = createBrowserHistory();

const rootReducer = combineReducers({
<<<<<<< HEAD
  user: User,
  post: Post,
  wish: Wish,
  router: connectRouter(history),
});

const middlewares = [thunk.withExtraArgument({ history: history })];
=======
  //user: User,
  post: Post,
  //wish: Wish,
  image: Image,
  router: connectRouter(history)
});

const middlewares = [thunk.withExtraArgument({history: history})];
>>>>>>> 60ac55797b59900453ed884bbf15b5b5ed37b8b0

const env = process.env.NODE_ENV;

if (env === "development") {
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
<<<<<<< HEAD
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;
=======
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({

  })
  :compose;
>>>>>>> 60ac55797b59900453ed884bbf15b5b5ed37b8b0

const enhancer = composeEnhancers(applyMiddleware(...middlewares));

const store = (initialStore) => createStore(rootReducer, enhancer);

<<<<<<< HEAD
export default store();
=======
export default store();
>>>>>>> 60ac55797b59900453ed884bbf15b5b5ed37b8b0
