---
path: /blog/sorting-algorithms
date: 2020-01-26T04:40:57.521Z
title: Sorting Algorithms
---

```javascript
/*** BUBBLE SORT ***/
const bubbleSort = arr => {
    let offset = 1
    let isSorted = false

    while (!isSorted) {
        isSorted = true
        for (let i = 0; i < arr.length - offset; i++) {
            if (arr[i] > arr[i + 1]) {
                swap(arr, i, i + 1)
                isSorted = false
            }
        }
        offset++
    }
    return arr
}

/*** SELECTION SORT ***/
const selectionSort = arr => {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIdx = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIdx]) {
                minIdx = j
            }
        }
        swap(arr, i, minIdx)
    }
    return arr
}

/*** INSERTION SORT ***/
const insertionSort = arr => {
    for (let i = 1; i < arr.length; i++) {
        let j = i
        while (j > 0 && arr[j] < arr[j - 1]) {
            swap(arr, j, j - 1)
            j--
        }
    }
    return arr
}

/*** QUICK SORT ***/
const quickSort = arr => {
    quickSortHelper(arr, 0, arr.length - 1)
    return arr
}

const quickSortHelper = (arr, start, end) => {
    if (start >= end) return

    let pivot = start
    let left = pivot + 1
    let right = end

    while (left <= right) {
        if (arr[left] > arr[pivot] && arr[right] < arr[pivot]) {
            swap(arr, left, right)
            left++
            right--
        } else if (arr[left] <= arr[pivot]) {
            left++
        } else if (arr[right] >= arr[pivot]) {
            right--
        }
    }
    swap(arr, right, pivot)

    quickSortHelper(arr, start, right - 1)
    quickSortHelper(arr, right + 1, end)
}

/*** MERGE SORT ***/
const mergeSort = arr => {
    if (arr.length <= 1) return arr
    const mid = Math.floor(arr.length / 2)
    const left = arr.slice(0, mid)
    const right = arr.slice(mid)
    return mergeSortHelper(mergeSort(left), mergeSort(right))
}

const mergeSortHelper = (a1, a2, aux = []) => {
    while (a1.length && a2.length)
        aux.push(a1[0] < a2[0] ? a1.shift() : a2.shift())
    return [...aux, ...a1, ...a2]
}

/*** SWAP ***/
const swap = (arr, i, j) => {
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

let { log } = console
log("bubblesort\n", bubbleSort([3, 2, 1, 5, 4, 6, 7]))
log("selectionsort\n", selectionSort([3, 2, 1, 5, 4, 6, 7]))
log("insertionsort\n", insertionSort([3, 2, 1, 5, 4, 6, 7]))
log("quicksort\n", quickSort([3, 2, 1, 5, 4, 6, 7]))
log("mergesort\n", mergeSort([3, 2, 1, 5, 4, 6, 7]))
```
