// Given an array nums of size n, return the majority element. The majority element is the element that appears more than ⌊n / 2⌋ times.



let nums = [2, 2, 1, 1, 1, 2, 2];
function maximum(nums) {
    let count = 0;
    let z = 0;

    for (let i = 0; i < nums.length; i++) {
        let b = nums[i];

        if (count === 0) {
            z = b;
        }

        if (b === z) {
            count = count + 1;
        } else {
            count = count - 1;
        }
    }

    return z;
}

// let nums = [2, 2, 1, 1, 1, 2, 2];
console.log(maximum(nums));