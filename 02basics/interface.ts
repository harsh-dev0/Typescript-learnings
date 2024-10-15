interface User {
    readonly dbID: number,
    email: string,
    userid: number,
    googleId?: string,
    // startTrial: ()=> string
    startTrial() : string,
    getcoupon(name: string): number
}
interface User{
    github: string
}

interface Admin extends User {
    role: "admin" | "ta" | "learner"
}
type User1 = string | number;

type user2 = [string, number];

const hp: Admin = { dbID: 1234, github: "", email: "h@h", userid: 11, startTrial: ()=>{
    return ""
}, role: "admin",
getcoupon: (name: "one")=>{
    return 1
}
  }
