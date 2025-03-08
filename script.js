function mincost(arr) {
    if (arr.length === 1) return 0; // No cost if only one rope

    const minHeap = new MinPriorityQueue(); // Use a min heap

    // Insert all elements into the min heap
    for (let num of arr) {
        minHeap.enqueue(num);
    }

    let totalCost = 0;

    // Process the heap until we have one rope left
    while (minHeap.size() > 1) {
        let first = minHeap.dequeue().element;
        let second = minHeap.dequeue().element;
        let cost = first + second;
        totalCost += cost;
        minHeap.enqueue(cost);
    }

    return totalCost;
}

module.exports = mincost;
