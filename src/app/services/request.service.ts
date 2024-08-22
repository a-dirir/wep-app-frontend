import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { NavigatorService } from './navigator.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { DataStoreService } from './datastore.service';

// create a function to send a request to the server

@Injectable({
    providedIn: 'root'
  })
export class RequestService {
    // endpoint: string = 'http://127.0.0.1:80/'
    endpoint: string = ''
    constructor(private router: Router) { }
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

            // check if response is 401, then redirect to login page
            else if (response.status == 400) {
                return response.json().then(function (error: any) {
                    var e = new Error(error['error']);
                    throw e;
                });
            }

            else{
                return response.json().then(function (error: any) {
                    var e = new Error(error['error']);
                    throw e;
                });
            }
        
            
        });
    }
}

