const worseBubbleSort = arr => {
    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1)
            }
        }
    }
    return arr
}

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

const selectionSort = arr => {
    for (let i = 0; i < arr.length - 1; i++) {
        let min = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) min = j
        }
        swap(arr, min, i)
    }
    return arr
}

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

const swap = (arr, i, j) => {
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

let arr = [40, 20, 60, 99, 12, 9, 81]

console.log(bubbleSort(arr))

arr = [40, 20, 60, 99, 12, 9, 81]

console.log(selectionSort(arr))

arr = [40, 20, 60, 99, 12, 9, 81]

console.log(insertionSort(arr))
