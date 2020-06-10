/**
 * Created by mawebley on 08/06/2020
 */

import {APISERVICE} from './APIS.service';
import {fromFetch} from 'rxjs/fetch';
import {catchError, switchMap} from 'rxjs/operators';
export default class PhoneService {

    /**
     * @description this service is not used because I am using Redux Epics but if I use
     *              a service I could use this.
     * @returns     {Observable<json>}
     */
    getPhones() {
        return fromFetch(`${APISERVICE.API.GET_PHONES}`)
            .pipe(
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