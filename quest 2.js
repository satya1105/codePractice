//Two sorted array merged into single array non decreasing


let array1 = [0,8,7,5,];
let array2 = [5, 6, 7, 3, 9, 8, 3];
function mergeSortedArrays(array1, array2) {
  const mergedArray = [];
  let i = 0, j = 0;

 
  while (i < array1.length && j < array2.length) {
    if (array1[i] <= array2[j]) {
      mergedArray.push(array1[i]);
      i++;
    } else {
      mergedArray.push(array2[j]);
      j++;
    }
  }

  while (i < array1.length) {
    mergedArray.push(array1[i]);
    i++;
  }

  while (j < array2.length) {
    mergedArray.push(array2[j]);
    j++;
  }

  return mergedArray;
}
const sortedArray = mergeSortedArrays(array1, array2);
console.log(sortedArray);
