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

@Injectable()
export class BeefApiService {
    _channels : any[];
    _debates : any[];
    _points : any[];
    _users : any[];
    currentUser: User;
    jwt:string;


    private apiUrl;

    
    constructor(private http : Http) {
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

    public addDebate(debateTitle: string, proponentId: number,
              channelId : number, channelName : string) {
        var debateUrl = "/debates/" + channelId;
        var createDate = new Date();
        var updateDate = createDate;
        var views = 1;
        var upVotes = 0;
        var downVotes = upVotes;

        this._debates.push({
            "debate_id": this._debates.length,
            "debate_title": debateTitle,
            "debate_url": debateUrl,
            "proponent_id": proponentId,
            "opponent_id": null,
            "channel_id": channelId,
            "channel_name": channelName,
            "create_date": createDate,
            "update_date": updateDate,
            "views": views,
            "up_votes": upVotes,
            "down_votes": downVotes
        });
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
        return this.http
			.post(`${this.apiUrl}/points`, req)
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
    }
    public setJwt(jwt){
        this.jwt = jwt;
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
        return this.currentUser;
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
        return true;
    }
    public getMyDebates():Debate[]{
        return this._debates.filter(
            debate => debate.proponent_id==this.currentUser.id || 
            debate.opponent_id==this.currentUser.id);
    }
    public verifyToken(token):Promise<any>{
        return this.http
			.get(`${this.apiUrl}/token/`+ token)
            .toPromise()
			.then(x => x)
			.catch(x => x.message);
    }
}
