
// 1. Create Storage
localStorage.setItem("Name","Kartik")
localStorage.setItem("Age",18)

// 2. Read Storage
let local = localStorage.getItem("Name")//return Kartik
let local2 = localStorage.getItem("name")//return null
console.log(local,local2,)
console.log(localStorage); // whole storage
// get a specific key at a specific position
let key = localStorage.key(1)
console.log(key);

// Get number of stored items
let len = localStorage.length
console.log(len);


// 3. Delete Storage

// 3 i. Delete A Pair
localStorage.removeItem("Name")
localStorage.removeItem("Age")

// 3 ii. Clear Whole Storage
localStorage.clear()


