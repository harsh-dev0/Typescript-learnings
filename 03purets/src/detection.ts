//in

interface User{
    name: string,
    email: string
}

interface Admin{
    name: string,
    email: string,
    isAdmin: boolean
}

function isAdmin(acc: User | Admin){
    // return acc.isAdmin // this will give error
    if("isAdmin" in acc) return acc.isAdmin;
}

// in similar fashion we can use typeOf to use type guards
// we can also use you know like truthy values always remember that
// 0, NaN, "" (the empty string), 0n (the bigint), null ,undefined are all false
// as well typeOf null is object as well that of array and NaN type is number

function logValue(x: Date | string) {
    if (x instanceof Date) {
      console.log(x.toUTCString());
                 
  
    } else {
      console.log(x.toUpperCase());
                 
  
    }
  }

type Fish ={swim: ()=> void}
type Bird ={fly: ()=> void}

function isFish(pet: Fish | Bird): pet is Fish{
    return (pet as Fish).swim !==undefined;
}

function getFood( pet: Fish | Bird){
    if(isFish(pet))
        return "fish food"
    else
    return "Bird"
}

interface Circle {
    kind: "circle",
    radius: number
}

interface Square {
    kind: "square",
    side: number
}

interface  Rectangle{
    kind: "Rectangle",
    length: number,
    width: number
}   

type Shape = Circle | Square | Rectangle

function getshape(shape: Shape){
    if (shape.kind ==='circle') {
        return Math.PI * shape.radius **2
    }
    // return shape.side*shape.side;
}

function getArea(shape: Shape){
    switch(shape.kind){
        case "circle":
            return Math.PI * shape.radius ** 2

        case "square":
            return shape.side * shape.side
        case "Rectangle":
            return shape.length * shape.width

        default:
            const _defaultforshape: never = shape
            return _defaultforshape
    }
}