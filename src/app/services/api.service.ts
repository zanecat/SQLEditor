import { Injectable} from '@angular/core';
import { Response, Http, RequestOptions, Headers } from '@angular/http'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise'


@Injectable()
export class ApiService{
    /**
     *
     */
    private queryServer : string = 'http://localhost:9000/execute'
    constructor(private http: Http) {}

    runQeury(query : string) : Promise<ResultData>{
        let headers = new Headers({ 'Content-Type': 'text/plain' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.queryServer, query, options).toPromise().then(this.extractData)
    }

    testQuery() : Promise<ResultData>{
        return this.http.get(this.queryServer).toPromise().then(this.extractData);
    }

    private extractData(res : Response): ResultData{
        let body = res.json() as ResultData;
        return body;
    }

    private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
        const body = error.json() || '';
        const err = body.error || JSON.stringify(body);
        errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
        errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
    }
}

export interface ResultData{
    colNames : Array<string>
    rowData : Array<Array<string>>
}