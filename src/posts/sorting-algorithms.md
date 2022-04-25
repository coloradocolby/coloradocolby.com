---
type: post
title: sorting algorithms
path: /posts/sorting-algorithms
description: all sorts of sorting algorithms
tags:
  - sorting
  - asymptotic time
date: 2020-01-26T04:40:57.521Z
---

_A collection of Sorting Algorithms_

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

/**_ SELECTION SORT _**/
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

/**_ INSERTION SORT _**/
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

/**_ QUICK SORT _**/
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

/**_ MERGE SORT _**/
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

/**_ SWAP _**/
const swap = (arr, i, j) => {
  ;[arr[i], arr[j]] = [arr[j], arr[i]]
}

console.log('bubblesort\n', bubbleSort([3, 2, 1, 5, 4, 6, 7]))
console.log('selectionsort\n', selectionSort([3, 2, 1, 5, 4, 6, 7]))
console.log('insertionsort\n', insertionSort([3, 2, 1, 5, 4, 6, 7]))
console.log('quicksort\n', quickSort([3, 2, 1, 5, 4, 6, 7]))
console.log('mergesort\n', mergeSort([3, 2, 1, 5, 4, 6, 7]))
```
