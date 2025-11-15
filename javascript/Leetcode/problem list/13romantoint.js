function romanToInt(s) {
    const roman = {
      "I":1,
      "V":5,  
      "X":10,  
      "L":50,  
      "C":100,  
      "D":500,  
      "M":1000,
    }
    let num=0
    for (let i = 0; i < s.split("").length; i++) {
        if (i<s.split("").length && roman[s[i]]<roman[s[i+1]]) {
            num -=roman[s[i]]
        }
        else{
            num+=roman[s[i]]
        }
        
    }
    return num
       
}
console.log(romanToInt("IX"));

