/**
 * Created by mawebley on 09/06/2020
 */
import * as types from './all-action-types';

export function loadPhonesActionCreator() {
    return {
        type: types.LOAD_PHONES
    }
}

export function loadPhonesSuccessActionCreator(phones) {
    return {
        type: types.LOAD_SUCCESS,
        phones
    }
}

export function loadPhonesErrorActionCreator(message) {
    return {
        type: types.LOAD_ERROR,
        error: message
    }
}