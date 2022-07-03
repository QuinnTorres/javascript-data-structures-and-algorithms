function mergeSort(array) {
    return mergeSortRec(array, 0, array.length - 1);
}

function mergeSortRec(array, start, end) {
    // base case - 1 element
    if (end <= start) {
        return [array[start]];
    }

    // left half
    let leftHalf = mergeSortRec(array, start, Math.floor((start + end) / 2));

    // right half
    let rightHalf = mergeSortRec(array, Math.floor((start + end) / 2) + 1, end);

    // combine
    let leftIndex = rightIndex = 0;
    let currLeft = leftHalf[leftIndex];
    let currRight = rightHalf[rightIndex];
    let combined = [];

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

    // return
    return combined;
}

function test() {
    let array = [56, 12, 78, 34, 99, 2, 7, 1, 8, 48, 62, 72, 35, 89, 100];
    console.log(`array: ${array}`);

    let sortedArray = mergeSort(array);
    console.log(`sorted array: ${sortedArray}`);
}

test();