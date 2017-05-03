import { Injectable } from '@angular/core';
import { CHANNELS, DEBATES, POINTS, USERS } from './mock-beef';
import { User } from './classes/user';
import { Debate } from './classes/debate';
import { Point } from './classes/point';
import { Channel } from './classes/channel';
import { LoginCredentials } from './classes/login-credentials';
import 'rxjs/add/operator/toPromise';
import { Http, Headers, Response } from '@angular/http';
import { environment } from '../../environments/environment';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Injectable()
export class BeefApiService {
    _channels : any[];
    _debates : any[];
    _points : any[];
    _users : any[];
    currentUser: User;
    jwt:string;


    private apiUrl;

    constructor(private http : Http,private router: Router,private route: ActivatedRoute,private titleService: Title) {
        if(environment.production){
            this.apiUrl = '/api/public';
        } else {
            this.apiUrl = 'https://b33f.io/api/public';
        }
    }

    private loadMockData() {
        this._channels = CHANNELS;
        this._debates = DEBATES;
        this._points = POINTS;
        this._users = USERS;
    }

    public getChannels() : Promise<any> {
        //return this._channels;
        return this.http.get(`${this.apiUrl}/channels`).toPromise()
            .then(x => x).catch(x => x.message);
    }

    public addChannel(channelName : string ) {
        // TODO: add api here
        this._channels.push({
                "channel_name": channelName,
                "channel_id": this._channels.length
        });
    }

    public getDebates() : Promise<any> {
        //return this._debates;
        return this.http.get(`${this.apiUrl}/debates`).toPromise()
        .then(function(x) {
            return x;
        }).catch(x => x.message);
    }

    public getMyDebates() : Promise<any> {
        let req = {
            jwt:this.jwt
        };

        return this.http
            .post(`${this.apiUrl}/user/debates`, req)
            .toPromise()
            .then(x => {
                return x;
            })
			.catch(x => x.message);
    }



    public getDebatesByChannelName(channelName : string) : Promise<Debate[]>{
        //return this._debates.filter(
        //    debate => debate.channel_name == channelName);
        return this.http.get(`${this.apiUrl}/debates/channel/${channelName}`)
        .toPromise()
        .then(function(x) {
            console.log(x.json());
            return x.json() as Debate[];
        }).catch(x => x.message);
    }

    public getDebatesByChannelID(channelID : number) : Promise<Debate[]>{
        return this.http.get(`${this.apiUrl}/debates/channel/${channelID}`)
        .toPromise()
        .then(function(x) {
            console.log(x.json());
            return x.json() as Debate[];
        }).catch(x => x.message);
    }


    public getDebateById(debateID : number) : Promise<any> {
        return this.http.get(`${this.apiUrl}/debates/${debateID}`)
        .toPromise()
        .then(function(x) {
            console.log(x.json());
            return x.json();
        }).catch(x => x.message);

    }

    public createDebate(debateTitle: string, channelId : string) : Promise<any> {
        let req = {
            debate_name: debateTitle,
            debate_channel: channelId,
            jwt:this.jwt
        };
        console.log(req);
        return this.http
			.post(`${this.apiUrl}/debate`, req)
            .toPromise()
			.then(x => x)
			.catch(x => x.message);
    }

    public joinDebate(debateId: string) : Promise<any> {
        let req = {
            jwt:this.jwt
        };
        console.log(req);
        return this.http
            .post(`${this.apiUrl}/debate/join/${debateId}`, req)
            .toPromise()
			.then(x => x)
			.catch(x => x.message);
    }



    public getPoints() {
        return this._points;
    }

    public getPointsByDebate(debateId : number) {
        /*
        return this._points.filter(
            point => point.debate_id == debateId);
        */

        return this._points;
    }

    public postPoint(debateId : number, pointText : string):Promise<any> {
        let req = {
            debate_id: debateId,
            point_text: pointText,
            jwt:this.jwt
        };
        console.log(req);
        return this.http
			.post(`${this.apiUrl}/point`, req)
            .toPromise()
			.then(x => x)
			.catch(x => x.message);
    }

    /* for now just return true if valid user */
    public login(loginCredentials:LoginCredentials):Promise<any>{
        let req = {
            "username": loginCredentials.username,
            "password": loginCredentials.password,
        }
        return this.http
			.post(`${this.apiUrl}/login`, req)
            .toPromise()
			.then(x => x)
			.catch(x => x.message);
    }

    public setCurrentUser(user:User){
        this.currentUser = user;
        sessionStorage.setItem('beef-username', user.username);
    }
    public setJwt(jwt){
        this.jwt = jwt;
        sessionStorage.setItem('beef-jwt', jwt);
    }
    public register(data):Promise<any>{
        return this.http
			.post(`${this.apiUrl}/register`, data)
            .toPromise()
			.then(x => x)
			.catch(x => x.message);
        
        //TODO: include mock logic to check for existing users
        //TODO: return promise
        //registering automatically logs a user in, is successful
    }

    public getUser():User{
        if (this.currentUser)
            return this.currentUser;
        if (sessionStorage.getItem('beef-username')) {
            this.jwt = sessionStorage.getItem('beef-jwt');
            return new User(sessionStorage.getItem('beef-username'));
        }
        return null;
    }

    public getUsers() : Promise<any[]> {
        return this.http.get(`${this.apiUrl}/users`)
        .toPromise()
        .then(function(x) {
            console.log(x.json());
            return x.json();
        }).catch(x => x.message);
    }

    public logout():boolean{
        this.currentUser = undefined;
        this.jwt = undefined;
        sessionStorage.removeItem('beef-jwt');
        sessionStorage.removeItem('beef-username');
        this.router.navigateByUrl("");
        return true;
    }

    public verifyToken(token):Promise<any>{
        return this.http
			.get(`${this.apiUrl}/token/`+ token)
            .toPromise()
			.then(x => x)
			.catch(x => x.message);
    }

    public setTitle( newTitle: string) {
        this.titleService.setTitle( newTitle );
    }
}
