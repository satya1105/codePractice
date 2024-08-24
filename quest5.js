
let w1 = "satya";
let w2 = "goluuuuuuuuuuuuuuuuu";
function merge(w1, w2) {
    let result = "";  
    // let maxLength = Math.max(w1.length, w2.length);
      
      let c = w1.length + w2.length;

    for (let i = 0; i < c; i++) {
        if (i < w1.length) {  
            result += w1[i];
        }
        if (i < w2.length) {  
            result += w2[i];
        }
    }
    
    return result;  
}


console.log(merge(w1, w2)); 
