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

    console.log('add words: hello goodbye hell what wow yeehaw quinn');
    list.add('hello');
    list.add('goodbye');
    list.add('hell');
    list.add('what');
    list.add('wow');
    list.add('yeehaw');
    list.add('quinn');
    list.add('quinnton');
    list.add('abcdefg');

    console.log(`contains('quinn'): ${list.contains('quinn')}`);
    console.log(`contains('quinnton'): ${list.contains('quinnton')}`);
    console.log(`contains('abcdef'): ${list.contains('abcdef')}`);
}

test();