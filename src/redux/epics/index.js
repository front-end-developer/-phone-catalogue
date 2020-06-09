/**
 * Created by mawebley on 09/06/2020
 */
import * as types from '../actions/all-action-types';
import {map, switchMap, catchError} from "rxjs/operators";
import {of} from "rxjs";
import {ajax} from "rxjs/ajax";
import {combineEpics, ofType} from "redux-observable";

const fetchPhonesEpic = action$ => (
    action$.pipe(
        ofType(types.LOAD_USER),
        switchMap(() => {
            console.log('API:', APISERVICE.API.GET_PHONES);
            return ajax.getJSON(APISERVICE.API.GET_PHONES)
                .pipe(
                    map(phones => {
                        console.log('phones: ', phones.results);
                        return {
                            type: types.LOAD_USER_SUCCESS,
                            users: phones.results
                        }
                    }),
                    catchError(error => {
                        console.log('error: ', error);
                        return of({
                            type: types.LOAD_USER_ERROR,
                            error: error
                        })
                    })
                )
        })
    )
);

export const rootEpic = combineEpics(fetchPhonesEpic);