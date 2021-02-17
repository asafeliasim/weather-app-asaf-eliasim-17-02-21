import {createStore,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {appReducer} from './redux/reducers';

const middleware = [thunk];

const store = createStore(
    appReducer,
    composeWithDevTools(applyMiddleware(...middleware)
    ))
export default store;
