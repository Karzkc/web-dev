// let a = Number(prompt("Enter the number :- "))

// function factorial(a){
//     let fact=1;
//     for (let i = 1; i < a+1; i++) {
//         fact=i*fact  
// }
//     console.log(`Factorial of number ${a} is ${fact}`);
//     alert(`Factorial of number ${a} is ${fact}`);

// }
// factorial(a)
let a = 6 
function factorial(a){
    let fact = [];
    for (let i = 1; i < a+1; i++){
        fact.push(i)
    }
    
    console.log(`factorial of number ${a} is ${fact.reduce(redu = (a,b)=>{
        return a*b
    })}`);
    
    
}
factorial(a)

