let fruits =["Apple","Mango","Orange"]
//index
console.log(fruits)
// .push

fruits.push("Banana")
fruits.push("Watermelon")
console.log(fruits)

fruits.unshift("Ramani");
console.log(fruits)
 
//unshifts adds at first
//push adds at last

fruits.shift() //removes element from first
fruits.pop()//removes element from last

let numbers =["10","20","30","40"];
numbers.forEach((value) => {
    console.log(value)
}
)

let num1=[5,12,8];
// .find( ==> returns the first match based on condition.

num1.find((value)=> {
    console.log(value>9)
})

.include()

let arr=[1,2,3,4,5]
let check =arr.includes(3) //true
console.log(check)

let arr1=[3,6,9,1,2]
//to sort the array
console.log(arr1.sort())
console.log(arr1.reverse())

let num2=[1,20,11,21,80,23,1053]
console.log(num2.sort((a,b)=>a-b))
console.log(num2.sort((a,b)=>b-a))