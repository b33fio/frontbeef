import { Point } from './point'
export class Debate {
    constructor(
        public debate_title?: string,
        public channel_name?: string,
        public point?:Point
    ){};
}