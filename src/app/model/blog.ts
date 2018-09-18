export class Blog {
    _id:string;
    title: string;
    author: string;
    published_date: string;
    like: { count:number ,
            users:Array<string>};
    content: string;
}
