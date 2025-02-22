// 1. Create Storage
sessionStorage.setItem("Name","Kartik")
sessionStorage.setItem("Age",18)

// 2. Read Storage
let session = sessionStorage.getItem("Name")//return Kartik
let session2 = sessionStorage.getItem("name")//return null
console.log(session,session2)

// 3. Delete Storage
// 3 i. Delete A Pair

sessionStorage.removeItem("Name")
sessionStorage.removeItem("Age")

// 3 ii. Clear Whole Storage
sessionStorage.clear()