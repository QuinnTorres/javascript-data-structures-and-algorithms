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

    remove(data, node) {
        if (node === undefined) {
            this.remove(data, this.root);
        } else {
            if (node.data === data) {
                if (node.left === null && node.right === null) {
                    node = null;
                } else if (node.left !== null) {
                    node = node.left;
                } else if (node.right !== null) {
                    node = node.right
                } else {
                    let newData = this.min(node.right).data;
    
                    this.remove(newData, node.right);
                    node.data = newData;
                }
            } else if (data < node.data && node.left) {
                this.remove(data, node.left);
            } else if (data > node.data && node.right) {
                this.remove(data, node.right);
            }
        }
    }

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

    toString() {
        this.inorder();
    }
}

function test() {
    let data = new BST(50);

    console.log(`data:`);
    data.toString();
    console.log('\n');

    console.log('add 20, 80, 10, 30, 70, 90');
    data.add(20);
    data.add(80);
    data.add(10);
    data.add(30);
    data.add(70);
    data.add(90);
    console.log(`data:`);
    data.toString();
    console.log('\n');

    console.log(`contains(30): ${data.contains(30)}`);
    console.log(`contains(25): ${data.contains(25)}\n`);

    console.log(`remove(90)`);
    data.remove(90);
    console.log(`data:`);
    data.toString();
    console.log('\n');

    console.log(`inorder(): ${data.inorder()}\n`);

    console.log(`preorder(): ${data.preorder()}\n`);

    console.log(`postorder(): ${data.postorder()}\n`);

    console.log(`min(): ${data.min()}\n`);

    console.log(`max(): ${data.min()}\n`);
}

test();