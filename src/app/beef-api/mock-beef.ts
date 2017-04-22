import { User } from './classes/user';
import { Point } from './classes/point';
import { Debate } from './classes/debate';
import { Channel } from './classes/channel';

export const CHANNELS = [
    new Channel("Programming",1),
    new Channel("Politics",2)
];

export const DEBATES = [
    new Debate(1,"Vim is better than emacs","/debates/1",'1','2','1',"Programming",'4382108430','4480932082',2000,500,123)
];

export const POINTS = [
    new Point(1,1,1,10,11,"Vim is lightweight, emacs is bloated")
];

export const USERS: User[] = [
    new User("user1","password","Fark Montenot","mfontenot@smu.edu","01/01/1970","123-456-7890")
];