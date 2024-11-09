function vowel(str) {
    
    let count = 0
    let vow = ["a","e","i","o","u"]
    for (const i of str) {
        if(vow.includes(i.toLowerCase())){
            count+=1;
        }

    }
    console.log(`Number of vowels in ${str} is ${count}`);
    
}
vowel("helAEIlo")