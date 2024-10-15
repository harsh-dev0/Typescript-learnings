// // const score: Array<number> = [];
// // const names: Array<string> = [];

// // function indentity1(val: any): any {
// //     return val;
// // }

// // function indentity2<T>(val: T): T {
// //     return val;
// // }

// // function indentity3<Type>(val: Type): Type {
// //     return val;
// // }

// // indentity2(3);       // works, returns 3
// // indentity3("3");     // works, returns "3"

// // interface b {
// //     brand: string,  // should be 'string' (lowercase), not 'String'
// //     type: number
// // }

// // indentity3<b>({ brand: "SomeBrand", type: 123 });  // works, matches interface b


// const loggingIdentity= <T>(arg: T[]): T=>{
//     return arg[3]
    
//   }

//   const getmore = <Type>(arg: Type[]): Type => {
//     return arg[3] ;  
//   }

interface database{
    connection: string,
    username: string,
    password: string
}
function af<Type,U extends  database>(val1:Type, val2:U): object{
return{
    val1,
    val2
}
}

// af(3, "4")
af(3, {
    connection: "sfsf",
    username: " ",
    password:" "

})

interface quiz{
    name: string,
    type: string
}

interface Course{
    name: string,
    author: string,
    subject: string
}

class Selleble<T>{
    public cart: T[]=[];
    addtocart(p: T){
        this.cart.push(p)
    }
}