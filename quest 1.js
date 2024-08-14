//Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed.
// In-place means modifying the original array directly without creating a new array. This is often done to optimize memory usage.

let array = [2,4,6,6,7,8];
let val = 6;

function removeOccurrences(array, val) {
    let count = 0;
    let j = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] !== val) {
            array[j] = array[i];
            j++;
        } else {
            count++;
        }
    }

    array.length = j;
 
    return array;
}

console.log(removeOccurrences(array, val));