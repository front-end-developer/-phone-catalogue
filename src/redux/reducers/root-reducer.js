/**
 * Created by mawebley on 09/06/2020
 */
import {loadingAll} from 'redux-global-loader';
import loadPhones from './load-phones-reducer';
import phones from './load-phones-reducer';
import {combineReducers} from "redux";

const rootReducer = combineReducers({
   loadingAll, loadPhones, phones
});

export default rootReducer;