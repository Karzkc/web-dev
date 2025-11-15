console.log("--- 1. false vs 0, '', [] ---");
console.log("0 == false:", 0 == false);
console.log("'' == false:", '' == false);
console.log("[] == false:", [] == false);
console.log("\n");

console.log("--- 2. null vs undefined vs 0 ---");
console.log("null == undefined:", null == undefined);
console.log("null === undefined:", null === undefined);
console.log("null == 0:", null == 0);
console.log("\n");

console.log("--- 3. NaN - Not a Number ---");
console.log("NaN == NaN:", NaN == NaN);
console.log("NaN === NaN:", NaN === NaN);
console.log("\n");

console.log("--- 4. Objects and Arrays (The + operator) ---");
console.log("[] + {}:", [] + {});
console.log({} + []);
console.log("\n");

console.log("--- 5. String vs Number with + and - ---");
console.log("'5' + 3:", '5' + 3);
console.log("'5' - 3:", '5' - 3);
console.log("\n");

console.log("--- 6. Array vs Negated Array ---");
console.log("[] == ![]:", [] == ![]);
console.log("\n");

console.log("--- 7. Variable Hoisting ---");
var x = 1;
function showX() {
    console.log("Inside showX:", x);
    var x = 2;
}
showX();
console.log("\n");

console.log("--- 8. The Classic Loop + setTimeout Problem (var) ---");
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log("From var loop:", i), 100);
}

console.log("--- 9. The let Solution ---");
for (let j = 0; j < 3; j++) {
    setTimeout(() => console.log("From let loop:", j), 200);
}
console.log("(Note: setTimeout results will appear last)\n");


setTimeout(() => {
    console.log("--- 10. typeof null ---");
    console.log("typeof null:", typeof null);
    console.log("\n");

    console.log("--- 11. Floating Point Precision ---");
    console.log("0.1 + 0.2 === 0.3:", 0.1 + 0.2 === 0.3);
    console.log("Actual value of 0.1 + 0.2:", 0.1 + 0.2);
    console.log("\n");

    console.log("--- 12. parseInt with unexpected inputs ---");
    console.log("parseInt('100px'):", parseInt('100px'));
    console.log("parseInt(null):", parseInt(null));
    console.log("parseInt('08'):", parseInt('08'));
    console.log("\n");

    console.log("--- 13. Comparing empty objects/arrays ---");
    console.log("{} === {}:", {} === {});
    console.log("[] === []:", [] === []);
}, 300);