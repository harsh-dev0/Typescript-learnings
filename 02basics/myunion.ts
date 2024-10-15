let score: number | string = 33;

score = "44"

type User = {
    name: string,
    id: number
}

type Admin = {
    username: string,
    id: number
}

let harsh : User | Admin;

harsh = {
    username: "hp",
    id: 12
}

harsh = {
    name: "Harsh Pal",
    id: 31
}

function getDbID(id: number| string){
    if(typeof id === "string"){
        id.toLowerCase;
    }
    else{
        id+ 1;
    }   
}

const data1: number[] = [1, 2, 3];
const data2: string[] = ["1", "2", "3"];
const data3: (string | number)[] = [1, 2, "3"]

let seatAllotment: "aisle" | "midlle" | "window";

seatAllotment = "aisle"

export {}