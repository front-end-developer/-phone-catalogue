/**
 * Created by mawebley on 09/06/2020
 */
import {loadingAll} from 'redux-global-loader';
import loadPhonesReducer from './load-phones-reducer';
import {combineReducers} from "redux";

const rootReducer = combineReducers({
   loadingAll, loadPhonesReducer
});

export default rootReducer;