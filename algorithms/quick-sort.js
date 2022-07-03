function quickSort(array) {
    return quickSortRec([...array], 0, array.length - 1);
}

function quickSortRec(array, start, end) {
    // base case
    if (end <= start) {
        return;
    }

    // get pivot value
    let pivot = array[Math.floor((start + end) / 2)];
    let i = start;
    let j = end;
    let temp;

    // partition
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

    // sort left
    quickSortRec(array, start, j);

    // sort right
    quickSortRec(array, i, end);

    return array;
}

function test() {
    let array = [56, 12, 78, 34, 99, 2, 7, 1, 8, 48, 62, 72, 35, 89, 100];
    console.log(`array: ${array}`);

    let sortedArray = quickSort(array);
    console.log(`sorted array: ${sortedArray}`);
}

test();