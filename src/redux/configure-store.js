/**
 * Created by mawebley on 09/06/2020
 */
import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './reducers/root-reducer';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import {createEpicMiddleware} from 'redux-observable';
import promise from 'redux-promise-middleware';
import {globalLoaderMiddleware} from 'redux-global-loader';
import {rootEpic} from './epics';

/**
 * @description     added for convenience
 *                  console.log('NODE_ENV env:', process.env.NODE_ENV);
 */
// console.log('NODE_ENV env:', process.env.NODE_ENV);

const epicMiddleware = createEpicMiddleware();
const devMiddleware = () => {
    return applyMiddleware(
        reduxImmutableStateInvariant(),
        promise,
        globalLoaderMiddleware,
        epicMiddleware
    )
}

const prodMiddleware = () => {
    return applyMiddleware(
        promise,
        globalLoaderMiddleware,
        epicMiddleware
    )
}

export default function configureStore(initialState) {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const storeCreated = createStore(
        rootReducer,
        initialState,
        (process.env.NODE_ENV === 'development' ? composeEnhancers(devMiddleware()) : prodMiddleware())
    );
    epicMiddleware.run(rootEpic);
    return storeCreated;
}