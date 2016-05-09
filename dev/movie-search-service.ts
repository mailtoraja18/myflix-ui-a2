/**
 * Created by user on 5/7/2016.
 */

import {Injectable} from 'angular2/core';
import {Movie} from "./Movie";
import {Observable} from "rxjs/Observable";
import 'rxjs/Rx';
import {Http, Headers, URLSearchParams} from "angular2/http";

@Injectable()
export class MovieSearchService {

    constructor(private _http: Http){}

    searchByID(imdbID : string) : Movie[] {
        var response = [];
        this.getData({'imdbID': imdbID }).subscribe(
            data => {
                console.log(data);
                data.forEach( item => response.push(new Movie(item)));
            }
        );
        return response;
    }

    searchByTitleOrActor(searchString : string) : Movie [] {
        var response = [];
        this.getData({'Title_like': searchString }).subscribe(
            data => {
                data.forEach( item => response.push(new Movie(item)));
            }
        );
        this.getData({'Actors_like': searchString }).subscribe(
            data => {
                data.forEach( item => response.push(new Movie(item)));
            }
        );
        return response;
    }

    /**
     * Get data from teh movie service rinning in port 4000
     * @param searchParam
     * @returns {Observable<R>}
     */
    getData(searchParam : Object) : Observable<any> {
        let params: URLSearchParams = new URLSearchParams();
        var keyNames = Object.keys(searchParam);
        for (var i in keyNames) {
            params.set(keyNames[i],searchParam[keyNames[i]])
        }
        return this._http.get("http://localhost:4000/movies" , {
            search : params
        }).map(response => response.json());
    }
}
