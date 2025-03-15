class MinHeap {
    constructor() {
        this.heap = [];
    }

    push(val) {
        this.heap.push(val);
        this.bubbleUp();
    }

    pop() {
        if (this.heap.length === 1) return this.heap.pop();
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();
        return min;
    }

    bubbleUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[parentIndex] <= this.heap[index]) break;
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
            index = parentIndex;
        }
    }

    bubbleDown() {
        let index = 0;
        const length = this.heap.length;
        while (true) {
            let leftIndex = 2 * index + 1;
            let rightIndex = 2 * index + 2;
            let smallest = index;

            if (leftIndex < length && this.heap[leftIndex] < this.heap[smallest]) {
                smallest = leftIndex;
            }
            if (rightIndex < length && this.heap[rightIndex] < this.heap[smallest]) {
                smallest = rightIndex;
            }
            if (smallest === index) break;

            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            index = smallest;
        }
    }

    size() {
        return this.heap.length;
    }
}

function mincost(arr) {
    if (arr.length === 1) return 0;

    let minHeap = new MinHeap();
    console.log("Initial array:", arr);

    for (let num of arr) {
        minHeap.push(num);
    }

    console.log("MinHeap after insertion:", minHeap.heap);

    let totalCost = 0;

    while (minHeap.size() > 1) {
        let first = minHeap.pop();
        let second = minHeap.pop();
        let cost = first + second;
        totalCost += cost;
        console.log(`Selected ropes: ${first}, ${second} | Cost: ${cost} | Total Cost: ${totalCost}`);
        minHeap.push(cost);
        console.log("MinHeap after merging:", minHeap.heap);
    }

    console.log("Final Total Cost:", totalCost);
    return totalCost;
}

function calculateMinCost() {
    const input = document.getElementById("inputRopes").value;
    const arr = input.split(",").map(num => parseInt(num.trim(), 10)).filter(num => !isNaN(num));

    if (arr.length === 0) {
        console.log("Invalid input: No numbers provided.");
        document.getElementById("result").textContent = "Please enter valid numbers.";
        return;
    }

    console.log("User input:", arr);
    const result = mincost(arr);
    document.getElementById("result").textContent = "Minimum cost to connect ropes: " + result;
}
