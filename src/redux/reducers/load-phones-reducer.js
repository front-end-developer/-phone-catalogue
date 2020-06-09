/**
 * Created by mawebley on 09/06/2020
 */
import * as types from '../actions/all-action-types';

const initialState = {
    phones: [],
    isLoading: false,
    error: null
};

/**
 * @description         whenever we want to fetch the date from a web service,
 *                      set isLoading to true to show a spinner
 * @param state
 * @param action
 * @returns {{isLoading: boolean, phones: [], error: *}|{isLoading: boolean, phones: [], error: null}}
 */
const loadPhonesReducer = (state = initialState, action) => {
    let  newState;
    switch (action.type) {
        case types.LOAD_PHONES:
            newState = {
                ...state,
                isLoading: true,
                error: null
            };
            break;
        case types.LOAD_SUCCESS:
            newState = {
                phones: [...action.phones],
                isLoading: false,
                error: null
            };
            break;
        case types.LOAD_ERROR:
            newState = {
                phones: [],
                isLoading: false,
                error: action.error
            };
            break;
        default:
            return state;
    }
    return newState;
}

export default loadPhonesReducer;