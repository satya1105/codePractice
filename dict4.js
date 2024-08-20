let a1 = [2, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 8, 7, 6, 2, 2, 2];


let dict = {};
let n = a1.length;

for (let i = 0; i < a1.length; i++) {
    let val = a1[i];
    if (dict[val] === undefined) {
        dict[val] = 1;
    } else {
        dict[val] = dict[val] + 1; 
    }
}

let maximum = 0;

for (let key in dict) {
    if (dict[key] > n / 2) {
        maximum = key;
        break;
    }
}

console.log(maximum);

// //Step 1: Initialize an empty object dict and get the length of the array a1
// let dict = {};
// let n = a1.length;
// The dict object will be used to store the frequency of each number in the array a1. The n variable stores the length of the array.
// //Step 2: Loop through the array a1 and for each element, check if it exists
// Iterate through the array a1 and count the frequency of each number
// for (let i = 0; i < a1.length; i++) {
//     let val = a1[i];
//     if (dict[val] === undefined) {
//         dict[val] = 1;
//     } else {
//         dict[val] = dict[val] + 1; 
//     }
// }
// This loop iterates through each element val in the array a1. For each element, it checks if the key val exists in the dict object. If it doesn't exist (i.e., dict[val] === undefined), it sets the value of dict[val] to 1, indicating that this is the first occurrence of val. If the key already exists, it increments the value of dict[val] by 1, indicating that val has occurred again.

// For example, after iterating through the array, the dict object would look like this:
// {
//     "2": 12,
//     "1": 5,
//     "8": 1,
//     "7": 1,
//     "6": 1
//   }
//   This shows that the number 2 occurs 12 times, the number 1 occurs 5 times, and so on.

// Step 3: Find the number that occurs more than half the length of the array
// let maximum = 0;

// for (let key in dict) {
//     if (dict[key] > n / 2) {
//         maximum = key;
//         break;
//     }
// }
// This loop iterates through the keys of the dict object. For each key, it checks if the value (i.e., the frequency of the number) is greater than half the length of the array n. If it is, it sets the maximum variable to the key (i.e., the number) and breaks out of the loop.

// In this case, since the number 2 occurs 12 times, which is more than half the length of the array (20), the maximum variable is set to 2.

// Step 4: Log the result
// console.log(maximum); // Output: 2
// The final result is logged to the console, which is the number 2.

// Note that this code assumes that there is only one number that occurs more than half the length of the array. If there are multiple numbers that meet this condition, this code will only return one of them.
