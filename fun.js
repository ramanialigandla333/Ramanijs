let fname="Ramani"; 
let age=15;

function sayName() {
    console.log("My Name is"  +  fname  +  "age is" + age);
    console.log('My Name is'  +  fname  +  'age is' + age);
    console.log(`My Name is ${fname}  age is ${age}`);

}
sayName()

//Array Function

let sayBye=() => {
    console.log("Bye")
// }
// sayBye()
 //how to convert simple to arrrow function
 //1.Remove function key word and add let
 //2. add=sign after function name

 //3. Add => sign after ()


 //My Name is Raj. Learning in Global
 let sayHi=() => {
    console.log("Hello");
 }
 sayHi

 //hositing menas before and after
//simple function support hositing
// arrow funtion dosent support hositing//hositing menas before and after
//simple function support hositing
// arrow funtion dosent support hositing

//there are 3 types of scopeing in js
//1. back scope
//2.function scope
//3.global scope

//block scope
// block means scope code access only in braces
//example : {}

// var let const
//inside of blocks
//outside of block

//inside of blocks in var

{
    var x=10;
    var y=20;
    console.log(x)
    console.log(y)
}

 //outside of the block in var
 {
    var x=10;
    var y=20;
 }
    console.log(x)
    console.log(y)

    // inside of block in let
    {
    let a=5;
    let b=30;
    console.log(a)
    console.log(b)
}

//outside of the block in let
{
    let a=5;
    let b=30;
}
    console.log(a)
    console.log(b)

    //inside of the block in const
   {
    const a=5;
    const b=30;
    console.log(a)
    console.log(b)
}
function s1()
{
    var a = 10;
    var b = 20;

    console.log(a,b)
}
s1()

//inside the function in let

function s1()
{
    let a = 10;
    let  b = 20;

    console.log(a,b)
}
s1()

//inside in function in const

function s1()
{
    const a = 10;
    const b = 20;


    console.log(a,b)
}
 s1()

