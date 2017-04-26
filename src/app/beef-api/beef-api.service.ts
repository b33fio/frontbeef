import { Injectable } from '@angular/core';
import { Http, Response }          from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { CHANNELS, DEBATES, POINTS, USERS } from './mock-beef';
import { User } from './classes/user';
import { Debate } from './classes/debate';
import { Point } from './classes/point';
import { Channel } from './classes/channel';
import { LoginCredentials } from './classes/login-credentials';


@Injectable()
export class BeefApiService {
    _channels : any[];
    _debates : any[];
    _points : any[];
    _users : any[];
    currentUser: User;

    private apiUrl = 'http://b33f.io/api/public';  // URL to web API


    constructor(private http : Http) {
        //this.loadMockData();
    }

    private loadMockData() {
        this._channels = CHANNELS;
        this._debates = DEBATES;
        this._points = POINTS;
        this._users = USERS;
    }

    public getChannels() : Promise<Channel[]> {
        //return this._channels;
        return this.http.get(`${this.apiUrl}/channels`).toPromise()
            .then(x => x.json() as Channel[]).catch(x => x.message);
    }

    public addChannel(channelName : string ) {
        // TODO: add api here
        this._channels.push({
                "channel_name": channelName,
                "channel_id": this._channels.length
        });
    }

    public getDebates() : Promise<Debate[]> {
        //return this._debates;
        return this.http.get(`${this.apiUrl}/debates`).toPromise()
        .then(function(x) {
            console.log(x.json());
            return x.json() as Debate[];
        }).catch(x => x.message);

    }

    public getDebatesByChannelName(channelName : string) : Promise<Debate[]>{
        //return this._debates.filter(
        //    debate => debate.channel_name == channelName);
        //TODO: change this to debate by channel
        return this.http.get(`${this.apiUrl}/debates`).toPromise()
        .then(function(x) {
            console.log(x.json());
            return x.json() as Debate[];
        }).catch(x => x.message);
    }

    public getDebateById(debateId : number) {
        return this._debates.find(
            debate => debate.debate_id == debateId);
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

    public addPoint(debateId : number, userId : number,
             pointText : string) {
        var _newId = this._points.length;
        this._points.push(
            new Point(_newId, debateId, userId, 10,11, pointText)
        );
    }

    /* for now just return true if valid user */
    public login(loginCredentials:LoginCredentials):boolean{
        for (let user of this._users) {
            if ((user.email === loginCredentials.email) && (user.password === loginCredentials.password)){
                this.currentUser = user;
                return true;
            }
        }
        return false;
        //TODO: return promise
    }


    public register(user:User):boolean{
        user.id = Math.max.apply(Math,this._users.map(x => x.id)) + 1;
        this._users.push(user);
        return true;
        
        //TODO: include mock logic to check for existing users
        //TODO: return promise
        //registering automatically logs a user in, is successful
    }

    public getUser():User{
        return this.currentUser;
    }

    public logout():boolean{
        this.currentUser = undefined;
        return true;
    }
    public getMyDebates():Debate[]{
        return this._debates.filter(
            debate => debate.proponent_id==this.currentUser.id || 
            debate.opponent_id==this.currentUser.id);
    }
}
