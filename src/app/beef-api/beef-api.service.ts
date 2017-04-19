import { Injectable } from '@angular/core';

import { CHANNELS, DEBATES, POINTS, USERS } from './mock-beef';
import { User } from './classes/user';
import { LoginCredentials } from './classes/login-credentials';

@Injectable()
export class BeefApiService {
    _channels : any[];
    _debates : any[];
    _points : any[];
    _users : any[];

    constructor() {
        this.loadMockData();
    }

    private loadMockData() {
        this._channels = CHANNELS;
        this._debates = DEBATES;
        this._points = POINTS;
        this._users = USERS;
    }

    public getChannels() {
        return this._channels;
    }

    public addChannel(channelName : string ) {
        this._channels.push({
                "channel_name": channelName,
                "channel_id": this._channels.length
        });
    }

    public getDebates() {
        return this._debates;
    }

    public getDebatesByChannelName(channelName : string) {
        return this._debates.filter(
            debate => debate.channel_name == channelName);
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

    public addPoint(debateId : number, userId : number,
             pointText : string) {
        this._points.push({
            "point_id" : this._points.length + 1,
            "point_text" : pointText,
            "debate_id": debateId,
            "user_id": userId,
            "up_votes": 0,
            "down_votes": 0
        });
    }

    /* for now just return true if valid user */
    public login(loginCredentials:LoginCredentials):boolean{
        for (let user of this._users) {
            if ((user.email === loginCredentials.email) && (user.password === loginCredentials.password)){
                return true;
            }
        }
        return false;
        //TODO: return promise
    }


    public register(user:User):boolean{
        this._users.push(user);
        console.log(this._users);
        return true;
        

        //TODO: include mock logic to check for existing users
        //TODO: return promise
        //registering automatically logs a user in, is successful
    }
}
