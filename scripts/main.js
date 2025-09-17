import { selectionSort } from "./sorting/selection.js";
import { insertionSort } from "./sorting/insertion.js";
import { bubbleSort } from "./sorting/bubble.js";
import { drawBars } from "./utils.js";
import { LinkedList } from "./linkedList.js";

let array = [50, 80, 30, 90, 60, 20];
let sorting = false;
let linkedList = new LinkedList();
let currentAlgorithm = bubbleSort; // Default to Bubble Sort for now

const speedInput = document.getElementById("speed");

document.addEventListener("DOMContentLoaded", () => {
    drawBars(array);
});

document.addEventListener("DOMContentLoaded", () => {
    drawBars(linkedList.toArray());
})

window.startSort = async function () {
    if (sorting) return;
    sorting = true;
    await currentAlgorithm(array, parseInt(speedInput.value)); // Use the selected algorithm
    sorting = false;
};

window.pauseSort = function () {
    // Pausing is more complex with async/await, handling this later
};

window.resetSort = function () {
    array = [50, 80, 30, 90, 60, 20];
    drawBars(array);
};

// This function changes the algorithm based on user selection. It updates the currentAlgorithm to either bubbleSort, insertionSort, or selectionSort.
window.setAlgorithm = function (algorithm) {
    const algorithmName = document.getElementById("algorithm-name");
    switch (algorithm) {
        case 'bubble':
            currentAlgorithm = bubbleSort;
            algorithmName.textContent = "Algorithm: Bubble Sort";
            break;
        case 'insertion':
            currentAlgorithm = insertionSort;
            algorithmName.textContent = "Algorithm: Insertion Sort";
            break;
        case 'selection':
            currentAlgorithm = selectionSort;
            algorithmName.textContent = "Algorithm: Selection Sort";
            break;
        default:
            currentAlgorithm = bubbleSort;
    }
    resetSort(); // Reset array whenever the algorithm changes
};

// Handle algorithm selection for Linked List operations
window.addLinkedListNode = function () {
    const value = parseInt(prompt("Enter node value"));
    if (!isNaN(value)) {
        linkedList.append(value);
        drawBars(linkedList.toArray());
    }
};

window.removeLinkedListNode = function() {
    const value = parseInt(prompt("Enter node value to remove"));
    linkedList.remove(value);
    drawBars(linkedList.toArray());
};

window.traverseLinkedList = async function () {
    await linkedList.traverse();
};
