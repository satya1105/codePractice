// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once.

function removeDuplicates(nums) {
    if (nums.length === 0) return 0;

    let a = 0;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[a]) {
            a++;
            nums[a] = nums[i];
        }
    }
    return a + 1;
}

let nums = [1, 1, 2, 2, 3];
let length = removeDuplicates(nums);

console.log(length); 
console.log(nums.slice(0, length)); 