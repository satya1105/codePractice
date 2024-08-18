let array = [2, 2, 3, 4, 6, 7, 7, 8, 9, 9];

function check(array) {
    let s = array.length;
    if (s === 0) {
        console.log("no element");
    } else {
        let unique = 0;

        for (let i = 1; i < s; i++) {
            if (array[i] !== array[unique]) {
                unique++;
                array[unique] = array[i];
            }
        }

        array.length = unique + 1; 
        console.log(array);
    }
}

check(array);
