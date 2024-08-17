// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once.

let array = [2, 2, 3, 4, 6, 7, 7, 8, 9, 9];

function check(array) {
    let s = array.length;
    if (s === 0) {
        console.log("no element");
    } else {
        for (let i = 0; i < s - 1; i++) {
            if (array[i] === array[i + 1]) {
                array.splice(i, 1); 
                i--; 
                s--; 
            }
        }
    }
    console.log(array);
}

check(array);
