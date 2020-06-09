/**
 * Created by mawebley on 09/06/2020
 */
import * as types from '../actions/all-action-types';
import {map, switchMap, catchError} from 'rxjs/operators';
import {of} from 'rxjs';
import {ajax} from 'rxjs/ajax';
import {combineEpics, ofType} from 'redux-observable';
import {APISERVICE} from '../../services/APIS.service';

const fetchPhonesEpic = action$ => (
    action$.pipe(
        ofType(types.LOAD_PHONES),
        switchMap(() => {
            return ajax.getJSON(APISERVICE.API.GET_PHONES)
                .pipe(
                    map(phones => {
                        console.log('TODO: delete this console.log: ', phones);
                        return {
                            type: types.LOAD_SUCCESS,
                            phones: phones.data
                        }
                    }),
                    catchError(error => {
                        console.log('error: ', error);
                        return of({
                            type: types.LOAD_ERROR,
                            error: error
                        })
                    })
                )
        })
    )
);

export const rootEpic = combineEpics(fetchPhonesEpic);