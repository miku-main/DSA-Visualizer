import { drawBars, sleep } from "../utils.js";

export async function insertionSort(arr, speed) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;

        // Highlight bars
        drawBars(arr, [i, j]);

        await sleep(speed);

        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
            drawBars(arr, [i, j]);
            await sleep(speed);
        }
        arr[j + 1] = key;

        drawBars(arr, [i, j+ 1]);
        await sleep(speed);
    }
    drawBars(arr); // Final sorted array
}