
let a1 = [1,2,3];
function maximum(a1) {
    let count = 0;
    let max = null;
    for (let i = 0; i < a1.length; i++) {
        let count = 0;
        for (let j = i + 1; j < a1.length; j++) {
            if (a1[i] === a1[j]) {
                count++;
            }
        }
        if (count > max) {
            max = count;
            max = a1[i];
        }
        else{
          
            
        }
    }
    return max;
}


console.log(maximum(a1));