import { Comment } from './comment'
export class Point {
     constructor(
         public point_id?: number, 
         public debate_id?: number, 
         public user_id?: number, 
         public up_votes?: number,
         public down_votes?: number,
         public text_content?: string,
         public comments?: Comment[]
    ){};
}
