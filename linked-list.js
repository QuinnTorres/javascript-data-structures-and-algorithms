class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }

    toString() {
        return this.data;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    push(data) {
        let node = new Node(data);
        node.next = this.head;
        this.head = node;

        this.size++;
    }

    pop() {
        let oldHead = this.head;
        this.head = oldHead.next;

        this.size--;

        return oldHead;
    }

    add(data) {
        let currNode = this.head;
        let node = new Node(data);

        while(currNode.next != null) {
            currNode = currNode.next;
        }

        currNode.next = node;
    }

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

    isEmpty() {
        return this.size === 0;
    }

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

    isInvalidIndex(index) {
        return index < 0 || index >= this.size;
    }

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

function test() {
    let list = new LinkedList();

    for(num of [...Array(10).keys()]) {
        list.push(num);
    }

    console.log(`list: ${list}\n`);

    console.log('push 10');
    list.push(10);
    console.log(`list: ${list}\n`);

    console.log(`pop: ${list.pop()}`);
    console.log(`list: ${list}\n`);

    console.log(`add 11`);
    list.add(11);
    console.log(`list: ${list}\n`);

    console.log(`insertAt(3, 12)`);
    list.insertAt(3, 12);
    console.log(`list: ${list}\n`);

    console.log(`removeFrom(3)`);
    list.removeFrom(3);
    console.log(`list: ${list}\n`);

    console.log(`remove(11)`);
    list.remove(11);
    console.log(`list: ${list}\n`);

    console.log(`indexOf(8): ${list.indexOf(8)}\n`);

    list = new LinkedList();

    console.log(`isEmpty(): ${list.isEmpty()}\n`);

    console.log(`size: ${list.size}\n`);
}

test();