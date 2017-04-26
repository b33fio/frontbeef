import { User } from './classes/user';
import { Point } from './classes/point';
import { Debate } from './classes/debate';
import { Channel } from './classes/channel';

export const CHANNELS = [
    new Channel("Programming",1,1),
    new Channel("Politics",2,0)
];

export const POINTS = [
    new Point(1,1,1,10,11,"Vim is lightweight, emacs is bloated"),
    new Point(2,1,2,10,11,"emacs has a lot built-in, where vim needs lots of plugins"),
    new Point(3,1,2,10,11,"emacs comes with tetris")
];

export const DEBATES = [
    new Debate(1,"Vim is better than emacs","/debate/1",'1','2','1',
        "Programming",'4382108430','4480932082',2000,500,123, POINTS, "mfonten",
        "lhansen")
];


export const USERS: User[] = [
    new User("fmonten","password","Fark Montenot","mfontenot@smu.edu","01/01/1970","123-456-7890",1),
    new User("lhansen","password","Luke Hansen","lhansen@smu.edu","01/01/1970","555-555-5555",2)
];
