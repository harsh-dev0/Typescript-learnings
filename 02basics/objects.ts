// const User = {
//     name: "harsh pal",
//     email: "contacthp311@gmail.com",
//     is_Active: "True"
// }

// function createUser(user: {name: string, email: string, is_Active: boolean}){}
// let newu = {name:"HP", email:"email", is_Active: true}
// createUser(newu)

// function createCourse(): {name: string, Price: number}{
//     return {name: "Reactjs", Price: 449}
// }

// type user = {
//     name: string,
//     email: string,
//     is_Active: boolean,
// }

// function createUser(User: user) :user {
//     // ({name: " ", email: "", is_Active: false})
//     return User
// }

// createUser({name: "Harsh", email: " ", is_Active: true})

type user = {
    readonly _id: number,
    name: string,
    email: string,
    is_Active: boolean,
    creditcarddetails?: number
}

const myUser: user = {
 _id : 1234,
name: "Harsh Pal",
email: "contacthp311@gmail.com",
is_Active: true
}

type cardNumber ={
    cardNumber: string
}

type cardDate ={
    cardDate: string
}

type carddetails = cardNumber & cardDate & {
    cvv: number
}
export { }