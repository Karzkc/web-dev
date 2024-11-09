let obj = {
    "name":"kk",
    "age":18
}
// console.log(obj);
// it contains prototype obj inside this which contains some set methods for obj

// let animal = {
//     eats:true
// }
// let rabbit = {
//     jumps :true
// }
// rabbit.__proto__ = animal;
// console.log(rabbit.eats); // by this we can append 2 obj properties

class animal{
    constructor(name){
        this.name = name
        // this will make the name of new obj into the name that is  passed in new obj
        // this will always run
        console.log("this will always run");
        
    }
    eats(){
        console.log("eating..");
        
    }
    jumps(){
        console.log("jumping..");
        
    }
}
// console.log(animal);

let newobj = new animal("newname");

// make a new object with all proto ob that class elements 

// without name name would be empty
// if we wanna make a new class with all same property then we will ..
// this will inherit all the properties and methods of previous class + its own properties
class newanimal extends animal{
    //here are new own properties
    // we can also change the contructor of newanimal
    constructor(name){
        super(name)
        // this.name = name , we will use name in super
        console.log("new animal is lionnn");
        // if we simply put this like this this will throw an error , we have to call super
        // super will make the parent constructor sun first than child
    }
    runs(){
        console.log("runs fast af..");
        
    }
}
let newanimal_obj= new newanimal("lion")
console.log(newanimal_obj.eats);
// this will carry all same properties

// instance of which will tell that one obj is extended form of another
newanimal_obj instanceof newanimal
// we will get true
// object instance of class 
newanimal_obj instanceof animal // this will also true as it is grand child
