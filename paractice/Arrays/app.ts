let arr:string[] = ["ali","ahmed","usman"]
console.log(arr)
// accessing elements
console.log(arr[0])
// modifying elements
arr[0] = "osman"
console.log(arr)
// deleting element
delete arr[2]
console.log(arr)

// adding different datatypes
const arr1:(number | string |boolean)[] = [1,2,3,"ali","ahmed","True",true,false,4,5,6]
// arry methods
// // pop
arr1.pop()
console.log(arr1)

// push
arr1.push(7)
console.log(arr1)

// shift
// removes first element
arr1.shift() 
console.log(arr1)

// unshift
// add new elemt at start
arr1.unshift(8) 
console.log(arr1)

// slice
console.log(arr1.slice(0,3))
console.log(arr1)

// splice
// // by setting semd element to 0, we can add new elements
// // and tell js not to remove any elements
console.log(arr1.splice(3,0,"hashim","sayed"))
console.log(arr1)


// // sort
arr1.sort() // sort in ascending order
console.log(arr1)

// // reverse
arr1.reverse() // reverse the array
console.log(arr1)

// concat
let ar2 = [1,2,3,4,5]
let ar3 = [6,7,8,9,10]
let ar4 = ar2.concat(ar3) // concatinate two arrays
console.log(ar4) // [1,2,3,4,5,6,7,8,9,10]

// join
console.log(arr1.join(" "))
console.log(arr1.join(",")) // join with comma


// isarray
console.log(Array.isArray(arr1)) // true

// indexof
console.log(arr1.indexOf("ali")) // returns the index of the first occurrence of the element in the array
// for other occurrences, we can use the second parameter to start searching from that index
let arr2 = [1,2,3,4,5,6,7,8,9,10]
console.log(arr2.indexOf(3,3)) 
console.log(arr1.lastIndexOf(3)) // returns the index of the last occurrence of the element in the array

// filter
let arr3 = [1,2,3,4,5,6,7,8,9,10]
let arr4 = arr3.filter((value) => value > 5) // filter the array based on the condition
console.log(arr4) // [6,7,8,9,10]
console.log(arr3) // [1,2,3,4,5,6,7,8,9,10]


// foreach
arr1.forEach((items) => console.log(items)) // prints each element of the 
// array one by one
// again method in for loop
// for (let i = 0; i < arr1.length; i++) {
//     console.log(arr1[i])
// }