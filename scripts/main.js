let array = [50, 80, 30, 90, 60, 20];
let bars = [];
let intervalId;
let isPaused = false;

const container = document.getElementById("visualization-area");

// Function to draw bars in the container
function drawBars(arr) {
    container.innerHTML = ""; // Clear previous bars
    bars = [];
    arr.forEach((value) => {
        const bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.height = `${value * 3}px`; // Height is 3px per value
        bars.push(bar);
        container.appendChild(bar);
    });
}

// Function to start the bubble sort visualization
function startSort() {
    if (intervalId) clearInterval(intervalId); // Clear any previous intervals

    let arr = [...array];
    let i = 0;
    let j = 0;

    drawBars(arr);

    intervalId = setInterval(() => {
        if (i < arr.length) {
            if (j < arr.length - i - 1) {
                // Highlight the bars to swap
                highlightBars(j, j + 1);

                if (arr[j] > arr[j + 1]) {
                    // Swap the bars
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                    drawBars(arr);
                }
                j++;
            } else {
                i++;
                j = 0;
            }
        } else {
            clearInterval(intervalId); // Stop the interval when done
        }
    }, document.getElementById("speed").value);
}

// Function to pause the sort
function pauseSort() {
    clearInterval(intervalId);
}

// Function to reset the array to original state
function resetSort() {
    array = [50, 80, 30, 90, 60, 20]; // Reset to original values
    drawBars(array);
}

// Function to highlight bars
function highlightBars(i, j) {
    bars.forEach((bar, index) => {
        if (index === i || index === j) {
            bar.style.backgroundColor = "red";
        } else {
            bar.style.backgroundColor = "steelblue";
        }
    });
}

// Initial draw
drawBars(array);
