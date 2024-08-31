import { Injectable } from '@angular/core';

// create a function to send a request to the server
@Injectable({
    providedIn: 'root'
  })
export class RequestService {
    endpoint: string = 'http://127.0.0.1:80/'
    constructor() { }
    // create a function to send a request to the server
    sendRequest(body:any, headers:any = null, path:string = 'app', method:string = 'POST') {                
        if (headers == null) {
            headers = {
                'Content-Type': 'application/json'
            }
        }

        return fetch(`${this.endpoint}${path}`, {
            method: method,
            body: JSON.stringify(body),
            headers: headers,
            credentials: 'include'
        })
        .then( (response: any) => {
            if (response.ok) {
                return response.json();
            }

            // check if response is 401, then redirect to login page
            else if (response.status == 401) {
                window.location.href = '/login';
            }

            // check if response is 400, then throw an error
            else if (response.status == 400) {
                return response.json().then(function (error: any) {
                    var e = new Error(error['error']);
                    throw e;
                });
            }

            // throw an error if response is not 200, 400, or 401
            else{
                return response.json().then(function (error: any) {
                    var e = new Error(error['error']);
                    throw e;
                });
            }    
        });
    }
}

