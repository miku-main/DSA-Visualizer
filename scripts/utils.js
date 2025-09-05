const container = document.getElementById("visualization-area");

export function drawBars(arr, highlight = []) {
    container.innerHTML = "";
    arr.forEach((value, index) => {
        const bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.height = `${value * 3}px`;
        bar.style.backgroundColor = highlight.includes(index) ? "red" : "steelblue";
        container.appendChild(bar);
    });
}

export function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
