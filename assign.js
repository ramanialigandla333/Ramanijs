//Redeclare Vs Reassign
//var , let , const
//redeclare

//  var fullName ="Ram"

//  fullName -"Ramani"
//  console.log(fullName)

//   var a=10;
//   var a=20; //redeclare
//   console.log(a)
//   a=20;
//   console.log(a);

//   let fullName ="Ram"

//  fullName -"Ramani"
//  console.log(fullName)

//   let s1 = 10;
// //   let s1 = 20; //redeclare
// //   console.log(s1)
//   s1=20;
//   console.log(s1)
 
//   var fullName ="Ram"

//  fullName -"Ramani"
//  console.log(fullName)

//   const a=10;
//   const a=20; //redeclare
//   console.log(a)
//   a=20;
//   console.log(a);

//setTimeout
//execute a function once after a delayed given time in millisecond
//1000 ==> 1 swcond
//5000 ==> 5 seconddds

function sayGlobal() {
    console.log("Hello Global")
    }
    
//it takes 2 parameters
//1st function
//2nd time in milliseconds
let seconds=3
// setTimeout(sayGlobal, seconds*1000)

//seexecute s a function repeatedly t given
// time in millisecod
// and to stop is ... use crtl+C
// setInterval(sayGlobal,1000)
//it will execute the function multiple times
//unless and until we stoped it
setTimeout(sayGlobal,seconds*100)
setInterval(sayGlobal,500)
  