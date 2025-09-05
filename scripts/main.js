import { bubbleSort } from "./sorting/bubble.js";
import { drawBars } from "./utils.js";

let array = [50, 80, 30, 90, 60, 20];
let sorting = false;

const speedInput = document.getElementById("speed");

document.addEventListener("DOMContentLoaded", () => {
    drawBars(array);
});

window.startSort = async function () {
    if (sorting) return;
    sorting = true;
    await bubbleSort(array, parseInt(speedInput.value));
    sorting = false;
};

window.pauseSort = function () {
    // Pausing is more complex with async/await; we’ll handle later
};

window.resetSort = function () {
    array = [50, 80, 30, 90, 60, 20];
    drawBars(array);
};
