class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor(data) {
        this.root = new Node(data);
        this.size = 1;
    }

    /**
     * Add a node according to the binary tree rules
     *
     * @param data the data to put in the node to add
     * @param node the node to start the addition from, defaulted to the root
     *
     * @return {undefined}
     */
    add(data, node) {
        if (node === undefined) {
            if (this.root !== null) {
                this.add(data, this.root);
            } else {
                this.root = new Node(data);
            }
    
            this.size++;
        } else {
            if (data > node.data && node.right) {
                this.add(data, node.right);
            } else if (data > node.data) {
                node.right = new Node(data);
            } else if (data < node.data && node.left) {
                this.add(data, node.left);
            } else if (data < node.data) {
                node.left = new Node(data);
            }
        }
    }

    /**
     * Check if the tree contains a node with data matching a given node
     *
     * @param data the data to search for a node containing it
     * @param node the node to start the search from, defaulted to the root
     *
     * @return {Boolean} true if there is node with data matching the given node
     */
    contains(data, node) {
        if (node === undefined) {
            if (this.root !== null) {
                return this.contains(data, this.root);
            } else {
                return false;
            }
        } else {
            if (node.data === data) {
                return true;
            } else {
                if (data > node.data && node.right) {
                    return this.contains(data, node.right);
                } else if (data < node.data && node.left) {
                    return this.contains(data, node.left);
                } else {
                    return false;
                }
            }
        }
    }

    /**
     * Remove a node from the tree if it has data matching the given node
     *
     * @param data the data to search for and remove the node containing it from the tree
     * @param node the node to start the search from, defaulted to the root
     *
     * @return {undefined}
     */
    remove(data, node) {
        if (node === undefined) {
            this.remove(data, this.root);
        } else {
            if (node.data === data) {
                if (node.left !== null && node.right === null) {
                    node = node.left;
                } else if (node.right !== null && node.left === null) {
                    node = node.right
                } else if (node.right !== null && node.left !== null) {
                    let newData = this.min(node.right).data;
    
                    this.remove(newData, node.right);
                    node.data = newData;
                }
            } else if (node.left.data === data && node.left.left === null && node.left.right === null) {
                node.left = null;
            } else if (node.right.data === data  && node.right.left === null && node.right.right === null) {
                node.right = null;
            } else if (data < node.data && node.left) {
                this.remove(data, node.left);
            } else if (data > node.data && node.right) {
                this.remove(data, node.right);
            }
        }
    }

    /**
     * Traverse the tree in an inorder fashion and log the data from the ndoes
     * as they are visited
     *
     * @param node the node to start the traversal from, defaulted to the root
     *
     * @return {undefined}
     */
    inorder(node) {
        if (node === undefined) {
            this.inorder(this.root);
        } else {
            if (node.left) {
                this.inorder(node.left);
            }
    
            console.log(node.data);
    
            if (node.right) {
                this.inorder(node.right);
            }
        }
    }

    /**
     * Traverse the tree in an preorder fashion and log the data from the ndoes
     * as they are visited
     *
     * @param node the node to start the traversal from, defaulted to the root
     *
     * @return {undefined}
     */
    preorder(node) {
        if (node === undefined) {
            this.preorder(this.root);
        } else {
            console.log(node.data);

            if (node.left) {
                this.inorder(node.left);
            }
    
            if (node.right) {
                this.inorder(node.right);
            }
        }
    }

    /**
     * Traverse the tree in an postorder fashion and log the data from the ndoes
     * as they are visited
     *
     * @param node the node to start the traversal from, defaulted to the root
     *
     * @return {undefined}
     */
    postorder(node) {
        if (node === undefined) {
            this.postorder(this.root);
        } else {
            if (node.left) {
                this.inorder(node.left);
            }
    
            if (node.right) {
                this.inorder(node.right);
            }
    
            console.log(node.data);
        }
    }

    /**
     * Find and return the node with the smallest data in the tree
     *
     * @param node the node to start the traversal from, defaulted to the root
     *
     * @return {Node} the node that was removed
     */
    min(node) {
        if (node === undefined) {
            if (this.root !== null) {
                return this.min(this.root);
            } else {
                return 0;
            }
        } else {
            if (node.left) {
                return this.min(node.left);
            } else {
                return node.data;
            }
        }
    }

    /**
     * Find and return the node with the largest data in the tree
     *
     * @param node the node to start the traversal from, defaulted to the root
     *
     * @return {Node} the node that was removed
     */
    max(node) {
        if (node === undefined) {
            if (this.root !== null) {
                return this.max(this.root);
            } else {
                return 0;
            }
        } else {
            if (node.right){
                return this.max(node.right);
            } else {
                return node.data;
            }
        }
    }

    /**
     * Log the tree's data in an inorder traversal
     *
     * @return {undefined}
     */
    toString() {
        this.inorder();
    }
}

function test() {
    let data = new BST(50);

    // Initial empty tree
    console.log(`data:`);
    data.toString();
    console.log('');

    // Tree with initial data
    console.log('add 20, 80, 10, 30, 70, 90');
    data.add(20);
    data.add(80);
    data.add(10);
    data.add(30);
    data.add(70);
    data.add(90);
    console.log(`data:`);
    data.toString();
    console.log('');

    // Contains
    console.log(`contains(30): ${data.contains(30)}`);
    console.log(`contains(25): ${data.contains(25)}\n`);

    // Remove
    console.log(`remove(90)`);
    data.remove(90);
    console.log(`data:`);
    data.toString();
    console.log('');

    // Inorder
    console.log(`inorder():`);
    data.inorder();
    console.log('');

    // Preorder
    console.log(`preorder():`);
    data.preorder();
    console.log('');

    // Postorder
    console.log(`postorder():`);
    data.postorder();
    console.log('');

    // Min
    console.log(`min(): ${data.min()}\n`);

    // Max
    console.log(`max(): ${data.max()}\n`);
}

test();