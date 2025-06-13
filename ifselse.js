//ifelse.js filename
//condition based checking variables

let age=19;
if(age>18)
{
    console.log("you can drive")
}else{
    console.log("you cannot drive")
}
const marks=82;
let grade;
if(marks>=90){
grade='A+';
}else if (marks>=80){
    grade='A';
}else if (marks>=70){
    grade='B';
}else if (marks>=60){
    grade='C';
}else if (marks>=50){
    grade='D';
}else{
    grade='F';
}
console.log(grade);