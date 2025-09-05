import { drawBars, sleep } from "../utils.js";

export async function bubbleSort(arr, speed) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            drawBars(arr, [j, j + 1]);
            await sleep(speed);
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                drawBars(arr, [j, j + 1]);
                await sleep(speed);
            }
        }
    }
    drawBars(arr); // Final sorted array
}
