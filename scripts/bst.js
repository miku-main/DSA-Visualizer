import { drawBars, sleep} from "./utils.js"

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

export class BST {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new TreeNode(value);
        if (!this.root) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    async traverseInOrder(node = this.root) {
        if (node !== null) {
            await this.traverseInOrder(node.left);
            drawBars(this.toArray());
            await sleep(300);
            await this.traverseInOrder(node.right);
        }
    }

    toArray() {
        let result = [];
        this.inOrderTraversal(this.root, result);
        return result;
    }

    inOrderTraversal(node, result) {
        if (node !== null) {
            this.inOrderTraversal(node.left, result);
            result.push(node.value);
            this.inOrderTraversal(node.right, result);
        }
    }
}

// BST Class: Contains methods for inserting nodes and performing an in-order traversal
// insert(value): inserts a new node into the tree
// traverseInOrder(): Performs an in-order traversal of the tree, visualizing nodes as they are visited
// toArray(): Converts the BST to an array for rendering