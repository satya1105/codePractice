let array1 = [2, 3, 4, 5, 6, 7, 0, 0, 0, 0, 0, 0];
let array2 = [1, 5, 6, 7, 8, 9];

let m = array1.length - array2.length;
console.log("value of array",array1.length);
console.log("value of m",m);

let n = array2.length;

let i = m - 1; // Last element in the first part of array1
let j = n - 1; // Last element in array2
let k = m + n - 1; // Last position in array1

while (j >= 0) {
    if (i >= 0 && array1[i] > array2[j]) {
        array1[k] = array1[i];
        i--;
    } else {
        array1[k] = array2[j];
        j--;
    }
    k--;
}

console.log(array1);
