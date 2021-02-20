import {createStore,applyMiddleware,combineReducers} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {appReducer,favoritesReducers,errorReducer} from './redux/reducers';

const middleware = [thunk];
const reducers = combineReducers({
    app:appReducer,
    userPref:favoritesReducers,
    errorAlert:errorReducer
})
const initialState = {}
const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware)
    ))
export default store;
