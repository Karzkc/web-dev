function Data_Generator() {

    let name_arr = ["Kartik", "Kunal", "Danny", "Harry", "Harsh"]
    let lang_arr = ["Python", "Javascript", "C", "C++", "C#", "Java"]
    let city_arr = ["New York", "New Delhi", "Melbourne", "Wellington", "London"]
    let isManager_arr = [true, false]
    let final_arr = []


    let name_rand = Math.floor(Math.random() * 5)
    let salary_rand = Math.floor(10000 + Math.random() * 50000)
    let lang_rand = Math.floor(Math.random() * 6)
    let city_rand = Math.floor(Math.random() * 5)
    let isManager_rand = Math.floor(Math.random() * 2)
    final_arr.push(name_arr[name_rand], salary_rand, lang_arr[lang_rand], city_arr[city_rand], isManager_arr[isManager_rand])


    return final_arr

}
let a = Data_Generator()
let obj = { 
    "name":a[0],
    "b":a[1],
    "c":a[2],
    "d":a[3],
    "e":a[4],
}
console.log(obj);
