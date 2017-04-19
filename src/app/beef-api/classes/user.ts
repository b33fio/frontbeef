export class User {
    public username: string;
    public password: string;
    public name: string;
    public email: string;
    public birthday: string;
    public phone: string;
    constructor(username?:string,password?:string,name?:string,email?:string,birthday?:string,phone?:string){
        this.username = username;
        this.password = password;
        this.name = name ;
        this.email = email;
        this.birthday = birthday;
        this.phone = phone;
    };
}