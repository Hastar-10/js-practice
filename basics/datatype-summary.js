// Primitive(Call by value)
// 7 types: String,Number,Boolean,Null,Undefined,Symbol,BigInt

const id=Symbol('1234')
const idVal=Symbol('1234')
console.log(id===idVal) // false 

const bigNum=23243465756765754654n // n converts it to BigInt

//Reference(Non-Primitive)
//Arrays,Objects,Functions

const heroes=["shaktiman","aman","rahul"]; // arrays
let myObj={
    name:"Saksham",
    age:22,
} //Object

const myFunct=function(){
    console.log("Hello World")
} //function stored in a variable


