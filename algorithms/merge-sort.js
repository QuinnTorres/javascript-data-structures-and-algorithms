/**
 * Sort an array of numbers using merge sort
 *
 * @param array the array to sort
 *
 * @return {Array} the array of sorted numbers
 */
function mergeSort(array) {
    return mergeSortRec(array, 0, array.length - 1);
}

/**
 * Sort an array of numbers using merge sort, given a range of indexes to sort
 *
 * @param array the array to sort
 * @param start the starting index to sort
 * @param end the ending index to sort
 *
 * @return {Array} the array of sorted numbers within the given index
 */
function mergeSortRec(array, start, end) {
    // Base case: 1 element
    if (end <= start) {
        return [array[start]];
    }

    // Merge sort left half
    let leftHalf = mergeSortRec(array, start, Math.floor((start + end) / 2));

    // Merge sort right half
    let rightHalf = mergeSortRec(array, Math.floor((start + end) / 2) + 1, end);

    let leftIndex = rightIndex = 0;
    let currLeft = leftHalf[leftIndex];
    let currRight = rightHalf[rightIndex];
    let combined = [];

    // Combine sorted halves
    while(currLeft || currRight) {
        if (!currLeft || currLeft > currRight) {
            combined.push(currRight);
            rightIndex++;
            currRight = rightHalf[rightIndex];
        } else if (!currRight || currRight > currLeft) {
            combined.push(currLeft);
            leftIndex++;
            currLeft = leftHalf[leftIndex];
        }
    }

    // Return sorted array
    return combined;
}

/**
 * Test the functionality of merge sort
 *
 * @return {undefined}
 */
function test() {
    // Initial Data
    let array = [56, 12, 78, 34, 99, 2, 7, 1, 8, 48, 62, 72, 35, 89, 100];
    console.log(`array: ${array}`);

    // Sorted Data
    let sortedArray = mergeSort(array);
    console.log(`sorted array: ${sortedArray}`);
}

test();