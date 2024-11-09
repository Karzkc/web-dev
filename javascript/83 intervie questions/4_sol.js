function password(pw) {
    if (pw.length < 8) {
        console.log("!!!Atleast 8 characters required!!!");
        return;
    }


    let upper = false
    let lower = false
    let digit = false

    for (const i of pw) {
        if (i === i.toUpperCase() && isNaN(Number(i))) {
            upper = true;
        }
        if (i === i.toLowerCase() && isNaN(Number(i))) {
            lower = true;
        }
        if (!isNaN(Number(i))) {
            digit = true;
        }


    }
    if (!upper) {
        console.log("!!!At least 1 uppercase letter required!!!");
    }
    if (!lower) {
        console.log("!!!At least 1 lowercase letter required!!!");
    }
    if (digit) {
        console.log("!!!At least 1 digit required!!!");
    }
    }
pw = "helGohghgh ghg242"
password(pw)