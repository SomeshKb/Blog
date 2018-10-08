export class Blog {
    _id:string;
    title: string;
    authorID: string;
    authorName:string;
    published_date: string;
    like: Array<string>;
    content: string;
    comments:Array<Comments>
}

export class Comments{
    userName: string;
    content : string;
    userID : string;
}
