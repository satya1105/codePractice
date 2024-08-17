// Given an array nums of size n, return the majority element. The majority element is the element that appears more than ⌊n / 2⌋ times.
let array = [2, 8, 4, 8, 6, 8, 8, 8, 8, 8, 8, 2, 2, 2];

function findMaxCountNumber(array) {
    
    array.sort((a, b) => a - b); 
    
    let maxCount = 1;
    let currentCount = 1;
    let maxNum = array[0];
    
    for (let i = 1; i < array.length; i++) {
        if (array[i] === array[i - 1]) {
            currentCount++;
        } else {
            currentCount = 1; 
        }
        
        if (currentCount > maxCount) {
            maxCount = currentCount;
            maxNum = array[i];
        }
    }
    
    let c = array.length / 2;
    if (maxCount > c) {
        console.log(maxNum);
    } else {
        console.log("0");
    }
}

findMaxCountNumber(array);
