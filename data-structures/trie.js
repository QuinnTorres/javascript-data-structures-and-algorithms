class Node {
    constructor(alphabetLength) {
        this.nodes = [];
        this.nodes.length = alphabetLength;
        this.isEndOfWord = false;
    }
}

class Trie {
    LOWERCASE_A = 97;

    constructor(alphabetLength) {
        this.root = new Node(alphabetLength);
        this.alphabetLength = alphabetLength;
    }

    /**
     * Add a word to the trie
     *
     * @param word the word to add
     *
     * @return {undefined}
     */
    add(word) {
        let currentNode = this.root;

        for(let i = 0; i < word.length; i++) {
            let nodeValue = word.charCodeAt(i) - this.LOWERCASE_A;

            if (currentNode[nodeValue] === undefined) {
                currentNode[nodeValue] = new Node(this.alphabetLength);
            }

            if (i === word.length - 1) {
                currentNode[nodeValue].isEndOfWord = true;
                break;
            }

            currentNode = currentNode[nodeValue];
        }
    }

    /**
     * Check if the trie contains a given word
     *
     * @param word the word to search for
     *
     * @return {Boolean} true if the trie contains the given word 
     */
    contains(word) {
        let currentNode = this.root;

        for(let i = 0; i < word.length; i++) {
            let nodeValue = word.charCodeAt(i) - this.LOWERCASE_A;

            if (currentNode[nodeValue] === undefined) {
                return false;
            } else if (i === word.length - 1) {
                return currentNode[nodeValue].isEndOfWord;
            }

            currentNode = currentNode[nodeValue];
        }
    }
}

function test() {
    let list = new Trie(26);

    // Add
    console.log('add words: hello world it is great to finally meet you');
    list.add('hello');
    list.add('world');
    list.add('it');
    list.add('is');
    list.add('great');
    list.add('to');
    list.add('finally');
    list.add('meet');
    list.add('you');
    
    // Contains
    console.log(`contains('finally'): ${list.contains('finally')}`);
    console.log(`contains('finale'): ${list.contains('finale')}`);
    console.log(`contains('great'): ${list.contains('great')}`);
}

test();