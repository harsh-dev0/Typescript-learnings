"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class user {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this.city = "Kanpur";
    }
    delteTok() {
        console.log("this.delteTok");
    }
    get AppleId() {
        return `apple${this.email}`;
    }
    get CourseCount() {
        return this._courseCount;
    }
    set CourseCount(num) {
        if (num >= 1) {
            throw new Error;
        }
        this._courseCount = num;
    }
}
class subuser extends user {
    constructor() {
        super(...arguments);
        this.isfamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
const hp = new user("", "");
