import { Point } from './point';
export class Debate {
    constructor(
        public debate_id?: number,
        public debate_title?: string,
        public debate_url?: string,
        public proponent_id?: string,
        public opponent_id?: string,
        public channel_id?: string,
        public channel_name?: string,
        public create_date?: string,
        public update_date?: string,
        public views?: number,
        public up_votes?: number,
        public down_votes?: number,
        public points?:Point[],
        public proponent_username?: string,
        public opponent_username?: string
    ){};
}
