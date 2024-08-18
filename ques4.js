// Given an array nums of size n, return the majority element. The majority element is the element that appears more than ⌊n / 2⌋ times.




function maximum(nums) {
    let count = 0;
    let c = 0;

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];

        if (count === 0) {
            c = num;
        }

        if (num === c) {
            count = count + 1;
        } else {
            count = count - 1;
        }
    }

    return c;
}

let array = [2, 2, 1, 1, 1, 2, 2];
console.log(maximum(array));