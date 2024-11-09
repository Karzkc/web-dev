function coffee() {
    let coffee = prompt('Welcome! Enter Your Type of Coffee!');
    let rand = 1 + Math.floor(Math.random() * 5);
    let prom = new Promise((resolve, reject) => {
        console.log("Preparing Your coffee");
        setTimeout(() => {
            if (rand < 5){
                console.log(`Brewing Your ${coffee} coffee!!!`);
                console.log(`Your ${coffee} Coffee Is ready!!!`);
                resolve(`Success , Your ${coffee} coffee is ready in ${rand} seconds`)
            }
            else{
                reject(`Uh oh!! We're Out of ${coffee} coffee ,Thanks For coming!!`); 
            }
        }, rand*1000);
        
    })
    return prom
}

(async function brewCoffee() {
    try {
        let result = await coffee()
        console.log(result);
        
    } catch (error) {
        console.log(error);
        
        
    }
    
})()