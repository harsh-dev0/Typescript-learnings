function addTwo (num: number): number {
 return num+2;
}

function getupper (val: string): string {
    return val.toUpperCase();
}

function user (name: string, email:string, is_Paid: boolean){}

let loginuser = (name: string, email: string, is_Paid: boolean = true)=>{}

const getHello = (s: string): string=>{
    return "";
}

const hero =['Hero', "MOM", "Dad"];

hero.map((h) :string =>{
    console.log(`Hero is ${h}`);
    return ""
})

function consoleError(errmsg: string): void {
    console.log(errmsg);
    
}


function hndleError(errmsg: string): never{
    throw new Error(errmsg);
}

addTwo(2);
getupper("sdmbfjs")
loginuser("yeirhweij", "sgbvfhjg")

export {}