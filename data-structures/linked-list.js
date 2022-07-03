class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }

    /**
     * Log the data in the node
     *
     * @return {undefined}
     */
    toString() {
        return this.data;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    /**
     * Add a new node to the linked list containing the given data
     *
     * @param data the data to put in the new node
     *
     * @return {undefined}
     */
    push(data) {
        let node = new Node(data);
        node.next = this.head;
        this.head = node;

        this.size++;
    }

    /**
     * Remove and return the node at the beginning of the linked list
     *
     * @return {Node} the node at the beginning of the linked list
     */
    pop() {
        let oldHead = this.head;
        this.head = oldHead.next;

        this.size--;

        return oldHead;
    }

    /**
     * Add a new node to the end of the linked list with the given data
     *
     * @param data the data to add to the new node
     *
     * @return {undefined}
     */
    add(data) {
        let currNode = this.head;
        let node = new Node(data);

        while(currNode.next != null) {
            currNode = currNode.next;
        }

        currNode.next = node;
    }

    /**
     * Add a new node to the linked list at the given index with the given data
     *
     * @param index the index to insert the new node at
     * @param data the data to add to the new node
     *
     * @return {undefined}
     */
    insertAt(index, data) {
        if (this.isInvalidIndex(index)) {
            return -1;
        }

        let node = new Node(data);

        if (index === 0) {
            node.next = this.head;
            this.head = node;
        } else {
            let parentNode = this.get(index - 1);

            node.next = parentNode.next;
            parentNode.next = node;
        }
    }

    /**
     * Remove a node from the linked list at the given index
     *
     * @param index the index of the node to remove
     *
     * @return {undefined}
     */
    removeFrom(index) {
        if (this.isInvalidIndex(index)) {
            return -1;
        }

        if(index === 0) {
            this.head = this.head.next;
        } else {
            let parentNode = this.get(index - 1);
            parentNode.next = parentNode.next.next;
        }
    }

    /**
     * Remove a node that matches the given data from the linked list 
     *
     * @param data the data to search the nodes for
     *
     * @return {undefined}
     */
    remove(data) {
        let currNode = this.head;

        if(currNode.data === data) {
            this.head = this.head.next;
        } else {
            while(currNode.next !== null) {
                if(currNode.next.data === data) {
                    currNode.next = currNode.next.next;
                } else {
                    currNode = currNode.next;
                }
            }
        }
    }

    /**
     * Return the index of the node in the linked list that matches the given data, or -1 otherwise
     *
     * @param data the data to search for in the nodes
     *
     * @return {Number} the index of the matching node, or -1 otherwise
     */
    indexOf(data) {
        let currNode = this.head;
        let index = 0;

        while(currNode != null) {
            if(data === currNode.data) {
                return index;
            }

            currNode = currNode.next;
            index++;
        }

        return -1;
    }

    /**
     * Return if the linked list is empty or not
     *
     * @return {Boolean} true if the linked list is empty
     */
    isEmpty() {
        return this.size === 0;
    }

    /**
     * Return the node at a given index in the linked list, or -1 otherwise
     *
     * @param index the index of the node to return
     *
     * @return {Object} the node at the given index, or -1 otherwise
     */
    get(index) {
        let currIndex = 0;
        let currNode = this.head;

        if (this.isInvalidIndex(index)) {
            return -1;
        }

        if (index === 0) {
            return this.head;
        }

        while(currIndex !== index && currNode.next != null) {
            currNode = currNode.next;
            currIndex++;
        }

        return currNode;
    }

    /**
     * Return if the given index of the linked list is outside of its valid range
     *
     * @param index the index to check the validity of
     *
     * @return {Boolean} true if the index is valid for the linked list
     */
    isInvalidIndex(index) {
        return index < 0 || index >= this.size;
    }

    /**
     * Log the data in the linked list in order
     *
     * @return {undefined}
     */
    toString() {
        let string = '[';
        let node = this.head;

        while(node != null) {
            string += `${node}, `;
            node = node.next;
        }

        string = string.slice(0, -2);
        string += ']';

        return string;
    }
}

/**
 * Test the functionality of the linked list
 *
 * @return {undefined}
 */
function test() {
    let list = new LinkedList();

    // Push
    for(num of [...Array(10).keys()]) {
        list.push(num);
    }

    // Initial Data
    console.log(`list: ${list}\n`);

    // Pop
    console.log(`pop: ${list.pop()}`);
    console.log(`list: ${list}\n`);

    // Add
    console.log(`add 11`);
    list.add(11);
    console.log(`list: ${list}\n`);

    // Insert At
    console.log(`insertAt(3, 12)`);
    list.insertAt(3, 12);
    console.log(`list: ${list}\n`);

    // Remove From
    console.log(`removeFrom(3)`);
    list.removeFrom(3);
    console.log(`list: ${list}\n`);

    // Remove
    console.log(`remove(11)`);
    list.remove(11);
    console.log(`list: ${list}\n`);

    // Index Of
    console.log(`indexOf(8): ${list.indexOf(8)}\n`);

    list = new LinkedList();

    // Is Empty
    console.log(`isEmpty(): ${list.isEmpty()}\n`);

    // Size
    console.log(`size: ${list.size}\n`);
}

test();