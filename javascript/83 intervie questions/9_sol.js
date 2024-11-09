function order() {
    let rand = 1 + Math.floor(Math.random() * 5);
    document.write("Confirming your details...<br>");
    console.log("Confirming your details...");

    return new Promise((resolve, reject) => {
        document.write("Confirming your order...<br>");
        console.log("Confirming your order...");

        setTimeout(() => {
            if (rand < 5) {
                document.write("Your details are verified !!!<br>");
                document.write("Your Order Is placed Successfully!!!<br>");
                console.log("Your details are verified !!!");
                console.log("Your Order Is placed Successfully!!!");
                resolve(`Success! Your order was placed in ${rand} seconds`);
            } else {
                reject("Error! There was an issue placing your order.");
            }
        }, rand * 1000);
    });
}

(async function placeOrder() {
    document.write("Loading...<br>");
    console.log("Loading...");
    try {
        let result = await order();
        document.write(result);
        console.log(result);
    } catch (error) {
        document.write(error);
        console.log(error);
    }
})();
