import { drawBars, sleep } from "./utils.js";

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

export class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Add a new node at the end
    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }

    // Remove a node by value
    remove(value) {
        if (this.head === null) return;

        if (this.head.value === value) {
            this.head = this.head.next;
            this.size--;
            return;
        }

        let current = this.head;
        while (current.next && current.next.value !== value) {
            current = current.next;
        }

        if (current.next) {
            current.next = current.next.next;
            this.size--;
        }
    }

    // Traverse the list and visualize it
    async traverse() {
        let current = this.head;
        while (current) {
            drawBars(this.toArray(), [current.value]);
            await sleep(300);
            current = current.next;
        }
    }

    // Convert LinkedList to Array (for rendering)
    toArray() {
        const arr = [];
        let current = this.head;
        while (current) {
            arr.push(current.value);
            current = current.next;
        }
        return arr;
    }
}
// LinkedList class: Manages node insertion and removal
// append(value): Adds a new node to the end
// remove(value): Removes the first node with the specified value
// traverse(): Visually traverses the list by highlighting nodes and displaying them one by one
// toArray(): Converts the linked list to an array for rendering