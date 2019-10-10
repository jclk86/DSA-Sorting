'use strict';

/**
 * 4. Implementing merge sort
Write a function mSort that sorts the dataset above using the merge sort algorithm.
 */

let DATA = '89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 32 26 2 14 33 45 72 56 44 21 88 27 68 15 62 93 98 73 28 16 46 87 28 65 38 67 16 85 63 23 69 64 91 9 70 81 27 97 82 6 88 3 7 46 13 11 64 76 31 26 38 28 13 17 69 90 1 6 7 64 43 9 73 80 98 46 27 22 87 49 83 6 39 42 51 54 84 34 53 78 40 14 5'.split(' ');
DATA = DATA.map(num => parseInt(num));

function mSort (arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const middle = Math.floor(arr.length/2);
  let left = arr.slice(0, middle);
  let right = arr.slice(middle, arr.length);

  left = mSort (left);
  right = mSort (right);
  return merge (left, right, arr);
}

function merge (left, right, arr) {
  let leftI = 0;
  let rightI = 0;
  let outputI = 0;
  while (leftI < left.length && rightI < right.length) {
    if (left[leftI] < right[rightI]) {
      arr[outputI++] = left[leftI++];
    }
    else {
      arr[outputI++] = right[rightI++];
    }
  }
  for (let i = leftI; i < left.length; i++) {
    arr[outputI++] = left[i];
  }
  for (let i = rightI; i < right.length; i++) {
    arr[outputI++] = right[i];
  }
  return arr;
}

function main(){
  const sorted = mSort(DATA);
  console.log(sorted);
  let ok = true;
  for (let i=0; i<sorted.length-1; i++) {
    if (sorted[i] > sorted[i+1]) ok = false;
  }
  console.log(ok);
}
main();