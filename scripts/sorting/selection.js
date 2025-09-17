import { drawBars, sleep } from "../utils.js";

export async function selectionSort(arr, speed) {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIdx = i;

        // Find the smallest element in the unsorted part
        for (let j = i + 1; j < arr.length; j++) {
            drawBars(arr, [i, j]); // Highlight bars
            await sleep(speed);
            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }

        // Swap the found minimum element with the first unsorted element
        if (minIdx !== i) {
            [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
            drawBars(arr, [i, minIdx]); // Highlight swapped bars
            await sleep(speed);
        }
    }
    drawBars(arr); // Final sorted array
}