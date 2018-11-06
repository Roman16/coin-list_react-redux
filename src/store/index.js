import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import Reducer from '../reducers';
import  thunk from 'redux-thunk';

const configureStore = () => {
    const store = createStore(
        Reducer,
        composeWithDevTools(applyMiddleware(thunk))
    );

    return store;
};

export default configureStore;