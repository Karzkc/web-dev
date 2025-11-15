// Merges two sorted arrays into one sorted array
function mergeTwoLists(a, b) {
    let i = 0, j = 0;
    let merged = [];
    while (i < a.length && j < b.length) {
        if (a[i] < b[j]) {
            merged.push(a[i]);
            i++;
        } else {
            merged.push(b[j]);
            j++;
        }
    }
    while (i < a.length) {
        merged.push(a[i]);
        i++;
    }
    while (j < b.length) {
        merged.push(b[j]);
        j++;
    }
    return merged;
}
function mergeTwoLists(a, b) {
    let big = []
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b.length; j++) {
            if (!big[i] && !big[j]) {
                if (i > j) {
                    big.push(j)
                }
                else if (j >= i) {
                    big.push(i)
                }
            }

        }

    }
    return big
}
console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]));
