import {Injectable} from '@angular/core';
import {Http, Response, Headers, URLSearchParams, RequestOptions} from "@angular/http";
import {Observable} from "rxjs";
import 'rxjs/Rx';
import {environment} from "../environments/environment";
import {Router} from '@angular/router';

@Injectable()
export class AuthenticationService {

    public token: string;
    public userInfo: any;

    constructor(private http: Http , private _router: Router) {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
        this.userInfo = null;
    }

    login(username: string, password: string): Observable<boolean> {
        console.log(username);
        console.log(password);
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        let urlSearchParms = new URLSearchParams();
        urlSearchParms.append('grant_type' , 'password');
        urlSearchParms.append('client_id' , environment.client_id);
        urlSearchParms.append('client_secret' , environment.client_secret);
        urlSearchParms.append('username',username);
        urlSearchParms.append('password' , password);
        //urlSearchParms.append('username','stacy62@example.net');
        //urlSearchParms.append('password' , 'secret');

        let body = urlSearchParms.toString();
        console.log(body);




        return this.http.post(environment.login_url, body , {headers:headers} ).map((response: Response) => {
            console.log(response.json().access_token);
                let token = response.json() &&  response.json().access_token ;
                if (token){
                    //this.token = response.json().access_token;
                    this.setLocalStorage(username,token);
                    // return true to indicate successful login
                    return true;

                }else {
                    // return false to indicate failed login
                    return false;
                }
        }).catch(this.handleError);

    }

    // loginWithImplicit(){
    //     let root_url = 'http://local.ui.client.recyclage.veolia.fr/';
    //     let urlSearchParms = new URLSearchParams();
    //     urlSearchParms.append('client_id' , '4');
    //     urlSearchParms.append('redirect_uri' , root_url+'callback');
    //     urlSearchParms.append('response_type' , 'token');
    //     let queryparms = urlSearchParms.toString();
    //     return this.http.get('http://local.api.client.recyclage.veolia.fr/oauth/authorize?'+queryparms)
    // }


    private handleError(error: Response){
       console.error(error);
        return Observable.throw(error.json() || 'Server error')
    }

    private setLocalStorage(username ,token){
        console.log('In set local storage: currentUser = '+JSON.stringify({username: username,token:token}))
        this.token = token;
        localStorage.setItem('currentUser',JSON.stringify({username: username,token:token}))
    }

    logout():void {
        this.token = null ;
        localStorage.removeItem('currentUser');
    }

    public setToken(token){
        //console.log('In Auth service '+token)
        console.log('In Auth service')
        this.token = token;
        return this.getConnectedUser();
    }

    public getConnectedUser(){
        let headers = new Headers();
        let options = new RequestOptions({headers:headers});
        headers.append('Accept','application/json');
        headers.append('Authorization','Bearer '+this.token);
        console.log(headers);
        return this.http.get(environment.connected_user_url, options )
            .map((response: Response) => {
                this.userInfo = response.json();
                console.log(this.userInfo)
                this.setLocalStorage(this.userInfo.email,this.token);
            })
            .do(data => console.log('All:' + JSON.stringify(data)))
            .catch(this.handleError).subscribe();
    }

    private getCurrentUser(){
        let currentUser = localStorage.getItem('currentUser');
        if( currentUser == null){
            this._router.navigate(['/login'])
        }
        return JSON.parse(currentUser);
    }

    public getBaseHeaders() : Headers{
        let currentUser = this.getCurrentUser();
        let token = currentUser.token ;
        console.log(token);
        let headers = new Headers();
        headers.append('Accept','application/json');
        headers.append('Authorization','Bearer '+token);
        return headers;
    }



}
