// Merge sort
// Merge sort takes a divide and conquer approach to sorting. It breaks the array down into continually smaller
//chunks, then merges them back together in the correct order:

function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  const middle = Math.floor(array.length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle, array.length);

  left = mergeSort(left);
  right = mergeSort(right);
  return merge(left, right, array);
}

// If the array has 1 or 0 elements, then it is by definition sorted, so you can return the array itself.
// Otherwise, you slice the array into 2 halves and sort each half by recursively calling mergeSort.
// The 2 sorted halves are then merged together in the correct order using the merge function:

function merge(left, right, array) {
  let leftIndex = 0;
  let rightIndex = 0;
  let outputIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      array[outputIndex++] = left[leftIndex++];
    } else {
      array[outputIndex++] = right[rightIndex++];
    }
  }

  for (let i = leftIndex; i < left.length; i++) {
    array[outputIndex++] = left[i];
  }

  for (let i = rightIndex; i < right.length; i++) {
    array[outputIndex++] = right[i];
  }
  return array;
}
// To merge the 2 lists you just keep choosing the lowest value from the left or right arrays that hasn't
// already been added to the output array. When 1 of the arrays is empty, you add all of the remaining values
// from the other array to it.

// Merge sort has a best, average, and worst-case performance of O(nlog(n)). This is probably the lower limit
// for a comparison sort's average case and is significantly better than bubble sort's O(n^2).

// Quicksort
// Quicksort is another sorting algorithm with O(nlog(n)) best and average-case performance,
// although it is O(n^2) in the worst case. Despite this, quicksort is more commonly used than merge sort,
// as it is more cache-efficient and can easily be performed in place (i.e., without additional memory allocations).

function quickSort(array, start = 0, end = array.length) {
  if (start >= end) {
    return array;
  }
  const middle = partition(array, start, end);
  array = quickSort(array, start, middle);
  array = quickSort(array, middle + 1, end);
  return array;
}
// Quicksort again uses a divide and conquer approach. You partition the array into 2 halves around a pivot value.
//  All of the values which are less than the pivot value go to 1 half of the array, and all of the values which
// are greater than the pivot go to the other half of the array. You then recursively sort the 2 halves of the
// array until the halves are of length 0 or 1.

// There are different partitioning algorithms. A common in-place algorithm is Lomuto's algorithm:

function partition(array, start, end) {
  const pivot = array[end - 1];
  let j = start;
  for (let i = start; i < end - 1; i++) {
    if (array[i] <= pivot) {
      swap(array, i, j);
      j++;
    }
  }
  swap(array, end - 1, j);
  return j;
}
// The pivot is the final value in the array. You loop through the array, swapping values as you go to put
//  them on either side of the pivot point. And finally, you put the pivot into the correct place in the array.

//
