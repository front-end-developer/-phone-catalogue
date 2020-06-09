/**
 * Created by mawebley on 08/06/2020
 */

import {APISERVICE} from './APIS.service';
import {fromFetch} from 'rxjs/fetch';
import {catchError, switchMap} from 'rxjs/operators';
export default class PhoneService {
    getPhones() {
        // return APISERVICE.API.GET_PHONES;
        // return APISERVICE.API.getPhones();

        return fromFetch(`${APISERVICE.API.GET_PHONES}`)
            .pip(
                switchMap( response => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        return of({
                            error: true,
                            message: `Error ${response.status}`
                        })
                    }
                }),
                catchError(err => {
                    console.log(err);
                    return of({
                        error: true,
                        message: err.message
                    })
                })
            )
    }
}