//Two sorted array merged into single array non decreasing


// let array1 = [0,8,7,5,];
// let array2 = [5, 6, 7, 3, 9, 8, 3];
let array1 = [2, 4, 6, 7];
let array2 = [1, 2, 5, 8];

function mergedArray(array1, array2) {
  let array3 = [];
  let i = 0;
  let j = 0;

  while (i < array1.length && j < array2.length) {
    if (array1[i] < array2[j]) {
      array3.push(array1[i]);
      i++;
    } else {
      array3.push(array2[j]);
      j++;
    }
  }


  while (i < array1.length) {
    array3.push(array1[i]);
    i++;
  }

  while (j < array2.length) {
    array3.push(array2[j]);
    j++;
  }

  return array3;
}

console.log( mergedArray(array1, array2));
