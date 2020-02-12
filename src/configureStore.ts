import { Middleware, createStore, applyMiddleware, combineReducers, compose } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import rootReducers from 'store/rootReducers';

const isDev = process.env.NODE_ENV === 'development';
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [],
};

const _combineReducers = combineReducers({
  ...rootReducers,
});

const reducers = persistReducer(persistConfig, _combineReducers);
const middlewares: Middleware[] = [thunk];

if (isDev) {
  middlewares.push(logger);
}

const store = createStore(reducers, undefined, composeEnhancers(applyMiddleware(...middlewares)));
const persistor = persistStore(store as any);

export type Reducers = ReturnType<typeof _combineReducers>;

export { store, persistor };
