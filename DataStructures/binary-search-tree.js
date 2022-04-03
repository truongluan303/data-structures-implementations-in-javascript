const { LinkedQueue } = require("./linked-queue");


class BinarySearchTree {
    #size;          // number of nodes in the tree
    #root;          // the root node

    constructor() {
        this.#root = null;
        this.#size = 0;
    }

    /**
     * insert new data to the tree
     * @param {*} data the data to be inserted
     */
    insert(data) {
        let newNode = new Node(data);
        this.#size++;

        if (this.#root == null) {
            this.#root = newNode;
            return;
        }

        let current = this.#root;
        while (true) {
            if (data <= current) {
                // go left
                if (current.left == null) {
                    current.left = newNode;
                    break;
                }
                current = current.left;
            }
            else {
                // go right
                if (current.right == null) {
                    current.right = newNode;
                    break;
                }
                current = current.right;
            }
        }
    }

    levelOrderTraversal() {
        if (this.#root == null) {
            return [];
        }
        let result = [];
        let queue = new LinkedQueue();
        queue.enqueue(this.#root);

        while (!queue.isEmpty) {
            let levelSize = queue.size;
            let currentLevel = [];

            for (let i = 0; i < levelSize; i++) {
                let current = queue.dequeue();
                currentLevel.push(current.data);

                if (current.left != null) {
                    queue.enqueue(current.left);
                }
                if (current.right != null) {
                    queue.enqueue(current.right);
                }
            }
            result.push(currentLevel);
        }
        return result;
    }
}


class Node {
    #data;      // data portion
    #left;      // points to the left node
    #right;     // points to the right node

    constructor(data) {
        this.#data = data;
        this.#left = null;
        this.#right = null;
    }

    get data() { return this.#data; }
    
    get left() { return this.#left; }

    get right() { return this.#right; }

    set data(data) { this.#data = data; }

    set left(left) { this.#left = left; }

    set right(right) { this.#right = right; }
}


module.exports = { BinarySearchTree };