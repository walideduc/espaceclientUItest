import {Injectable} from '@angular/core';
import {Http, Response, Headers, URLSearchParams} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class AuthenticationService {

    public token: string;

    constructor(private http: Http) {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }

    login(username: string, password: string): Observable<boolean> {
        console.log(username);
        console.log(password);
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        let urlSearchParms = new URLSearchParams();
        urlSearchParms.append('grant_type' , 'password');
        urlSearchParms.append('client_id' , '4');
        urlSearchParms.append('client_secret' , 'WHQE2kkcLHG3Zbf7nwLUNSrooUzkZkrXxgtjGvsu');
        urlSearchParms.append('username',username);
        urlSearchParms.append('password' , password);
        //urlSearchParms.append('username','stacy62@example.net');
        //urlSearchParms.append('password' , 'secret');

        let body = urlSearchParms.toString();




        return this.http.post('http://local.api.client.recyclage.veolia.fr/oauth/token', body , {headers:headers} ).map((response: Response) => {
            console.log(response.json().access_token);
                let token = response.json() &&  response.json().access_token ;
                if (token){
                    //this.token = response.json().access_token;
                    this.token = token;
                    localStorage.setItem('currentUser',JSON.stringify({username: username,token:token}))
                    // return true to indicate successful login
                    return true;

                }else {
                    // return false to indicate failed login
                    return false;
                }
        }).catch(this.handleError);

    }
    private handleError(error: Response){
       console.error(error);
        return Observable.throw(error.json() || 'Server error')
    }

    logout():void {
        this.token = null ;
        localStorage.removeItem('currentUser');
    }

}
