//the switch statement is used when you want to compare one value against many possible cases
//syntax
// switch(expressions){
//     case value1:
//         //code block
//         break;
//         case value2:
//             //code block
//             break;
//             default:
//                 //code block
// }


let day = 1
switch (day) {
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Another day");
}