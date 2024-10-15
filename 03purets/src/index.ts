class user {
        
        protected _courseCount = 1;

        readonly city: string = "Kanpur";
        constructor(public email: string, private name: string){
            
    }
    private delteTok(){
        console.log("this.delteTok");
        
    }
    get AppleId(): string {
        return `apple${this.email}`;
    }

    get CourseCount () : number {
        return this._courseCount;  
    }
        set CourseCount (num)  {
        if (num>=1) {
    throw new Error; 
        }
        this._courseCount = num;
    }
}

class subuser extends user{
    isfamily: boolean = true;
    changeCourseCount(){
        this._courseCount = 4;
    }
}

const hp = new user("", "")
// hp.city = "kanpu"
// hp.delteTok()
export {}