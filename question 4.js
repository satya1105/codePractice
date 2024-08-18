// Given an array nums of size n, return the majority element. The majority element is the element that appears more than ⌊n / 2⌋ times.
// let array = [2, 8, 4, 8, 6, 8, 8, 8, 8, 8, 8, 2, 2, 2];

// let array = [2, 2, 2, 2, 8, 8, 8, 8, 8, 8, 8, 8];
let array = [2,4,5,6,0,0,0,0,0,1];

function maximum(array) {
    let a = null;
    let count = 0;

    for (let i = 0; i < array.length; i++) {
        if (count === 0) {
            a = array[i];
            count = 1;
        } else if (array[i] === a) {
            count++;
        } else {
            count--;
        }
    }
    count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === a) {
            count++;
        }
    }
    let c = Math.floor(array.length / 2);
    if (count > c) {
        console.log(a);
    } else {
        console.log("0");
    }
}
maximum(array);
