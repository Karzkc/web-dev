// 1. Set a Cookie (with path=/)
document.cookie = "Name=Kartik; path=/";
document.cookie = "Age=18; expires=" + new Date(2025,10,1).toUTCString() + "; path=/";
document.cookie = "prn=073; expires=" + new Date(2025,10,1).toUTCString() + "; path=/";

// 2. Get all Cookies
console.log(document.cookie);

// 3. Delete the cookie (with path=/) -  Use the same path as when you set it!
// document.cookie = "Name=Kartik; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
// document.cookie = "Age=18; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
// document.cookie = "prn=073; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";

// console.log("deleted: "+ document.cookie); // Should be empty

// extras 

// we cant add cookies as a special characters as @#$ 
// thats why well use uri component 
let name = "@#$"
document.cookie = `${encodeURIComponent("name")}=${encodeURIComponent(name)}; path=/`;
console.log(document.cookie);// encrypted version
console.log(decodeURIComponent(document.cookie));// decrypted version

