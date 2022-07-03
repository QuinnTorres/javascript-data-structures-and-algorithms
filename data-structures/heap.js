class MaxHeap {
    constructor() {
        this.heap = [null];
    }

    get size() {
        return this.heap.length - 1;
    }

    set size(size) {
        if (size < 0) {
            size = 0;
        }

        this.heap.length = size + 1;
    }

    /**
     * Add a node to the heap according to the max heap rules
     *
     * @param node the node to add
     *
     * @return {undefined}
     */
    insert(node) {
        // Add to end of heap
        let length = this.heap.length;
        this.heap[length] = node;

        let currIndex = length;
        let parentIndex = Math.floor(currIndex / 2);
        let parent = this.heap[parentIndex];

        // Swim node up until its parent isn't bigger or doesn't exist
        while (parent && node > parent) {
            this.heap[parentIndex] = node;
            this.heap[currIndex] = parent;

            currIndex = parentIndex;
            parentIndex = Math.floor(currIndex / 2);
            parent = this.heap[parentIndex];
        }
    }

    /**
     * Remove and return the largest node in the heap
     *
     * @return {Number} the largest node in the heap
     */
    max() {
        let result = this.heap[1];
        let node = this.heap[this.heap.length - 1];

        // Put last entry at the top and remove the last entry
        this.heap[1] = node;
        this.heap.length--;

        let currIndex = 1;
        let leftIndex = currIndex * 2;
        let rightIndex = leftIndex + 1;

        let leftChild = this.heap[leftIndex];
        let rightChild = this.heap[rightIndex];

        // Sink down and swap with the largest of two children until the children aren't bigger or there are none
        while((leftChild || rightChild) && (leftChild > node || rightChild > node)) {
            if (!rightChild || (leftChild > rightChild)) {
                this.heap[leftIndex] = node;
                this.heap[currIndex] = leftChild;
                currIndex = leftIndex;
            } else {
                this.heap[rightIndex] = node;
                this.heap[currIndex] = rightChild;
                currIndex = rightIndex;
            }

            leftIndex = currIndex * 2;
            rightIndex = leftIndex + 1;

            leftChild = this.heap[leftIndex];
            rightChild = this.heap[rightIndex];
        }

        return result;
    }

    /**
     * Log all of the nodes in the heap, in the order they appear in the array
     *
     * @return {undefined}
     */
    toString() {
        return this.heap;
    }
}

/**
 * Test the functionality of the heap
 *
 * @return {undefined}
 */
function test() {
    let heap = new MaxHeap();

    // Insert
    for(num of [5, 2, 9, 6, 7, 1, 3, 8, 4]) {
        heap.insert(num);
    }

    // Size
    console.log(`size: ${heap.size}\n`);

    // Initial Data
    console.log(`heap: ${heap.toString()}\n`);

    // Max
    console.log(`max(): ${heap.max()}`);
    console.log(`max(): ${heap.max()}`);
    console.log(`max(): ${heap.max()}`);

    // toString
    console.log(`heap: ${heap.toString()}\n`);
}

test();