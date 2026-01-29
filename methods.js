// string methods()
// length()
// trim()
//tolowrcase()
//toUppercas()
//includes()
//indexof()
//slice()
//substring()
//replace()
//cocat()
//split()

// let str="hello javaScript world !"
// console.log(str)
// console.log(" length():",str.length)

// let trimText = str.trim();
// console.log("trim() :",trimText.length)

// console.log("toUppercase() :",str.toUpperCase())
// console.log("tolowercas():", str.toLowerCase())

// console.log("includes():", str.includes("test"))

// console.log ("indexOf():",str.lengtOf("javaScript"))

// console.log("slice():",str.slice(1,7))

// console.log("substring():",str.substring(2,7))

// console.log("replace():",str.replace("world,35"))

// let extraRext ="-HELLO JS";
// console.log("concat :", str.concat(extraRext))

// console.log("Split:",str.split(""));


//array methods()
//length()
//push()
//pop()
//unshift()
//shift()
//concat()
//includes()
//indexof()
//splice()
//slice()
//join()
//delete()
//map()
//filter()
//find()
//sort()
//forEach()
//reverse()
//flat()

let arr =['one','two','three']
console.log("Default array:",arr)

console.log("length();",arr.length)

//console.log("pus():",arr.push("new added element"))
arr.push("new add element")
console.log("array after push:",arr)

arr.pop();
console.log('array after pop:',arr)

arr.unshift("first element")
console.log('array after unshift:',arr)

arr.shift()
console.log('array after shift:',arr)

let newArr =["str 1","str 2"];
let mixedarr=arr.concat(newArr)
console.log("default array after concat:",arr)
console.log("array after concat:",mixedArr)

console.log("include():",arr.includes("three"))
console.log("indexof():",arr.includes("three"))

console.log("slice():",arr.slice(2,4))
console.log("splice():",arr.splice(2,4))
console.log("old array:",arr)

console.log("join():",arr.join(","))
delete arr[4]
//console.log(arr)

console.log("Array iteration method:")
let numbers=[1,2,3,4,5]

console.log("map:",numbers.map(num => num * 2))
console.log("after map old array:",numbers)

console.log("filter:",numbers.filter(num => num >2))
console.log("after filter old array:",numbers)

console.log("forEach:",)
numbers.forEach(num => console.log(num))

let num =[3,5,2,4,1]
//console.log("sort():",num.sort())
console.log("reverse():",num.reverse())

let nestedArray=[1,2[3,4],[5,6]]
console.log("default nested array:",nestedArray)
let flstArray =nestedArray.flat()
console.log("flatArray",FlatArray)

// array destructuring
let array =[1,2,3,4,5]
const [first,second,third]=array
console.log(first)
console.log(second)
console.log(third)