/**
 * Sort an array of numbers using quick sort
 *
 * @param array the array to sort
 *
 * @return {Array} the array of sorted numbers
 */
function quickSort(array) {
    return quickSortRec([...array], 0, array.length - 1);
}

/**
 * Sort an array of numbers recursively using quick sort, given a range of indexes to sort
 *
 * @param array the array to sort
 * @param start the starting index to sort
 * @param end the ending index to sort
 *
 * @return {Array} the array of sorted numbers within the given index
 */
function quickSortRec(array, start, end) {
    // Base case: start and end indexes are reversed
    if (end <= start) {
        return;
    }

    // 1. Get pivot value
    let pivot = array[Math.floor((start + end) / 2)];
    let i = start;
    let j = end;
    let temp;

    // 2. Partition array
    while (i <= j) {
        while (array[i] < pivot && i < end) {
            i++;
        }

        while (array[j] > pivot && j > start) {
            j--;
        }

        if (i <= j) {
            temp = array[i];
            array[i] = array[j];
            array[j] = temp;
            i++;
            j--;
        }
    }

    // 3. Sort left half
    quickSortRec(array, start, j);

    // 4. Sort right half
    quickSortRec(array, i, end);

    // 5. Return sorted array
    return array;
}

/**
 * Test the functionality of quick sort
 *
 * @return {undefined}
 */
function test() {
    // Initial Data
    let array = [56, 12, 78, 34, 99, 2, 7, 1, 8, 48, 62, 72, 35, 89, 100];
    console.log(`array: ${array}`);

    // Sorted Data
    let sortedArray = quickSort(array);
    console.log(`sorted array: ${sortedArray}`);
}

test();