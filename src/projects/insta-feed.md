---
type: project
path: /projects/insta-feed
title: insta-feed
date: 2017-11-22T15:35:00.000Z
description: instagram clone with custom oauth2 flow
tags:
    - instagram
    - react
    - nodejs
    - socket.io
    - oauth2
---

This was a fun project...

```javascript
const solve = async (board, row = 0, col = 0) => {
    if (row === 9) return true
    if (col === 9) return await solve(board, row + 1, 0)

    if (board[row][col] !== "") return await solve(board, row, col + 1) // the number here is pre-existing
    for (let i = 1; i <= 9; i++) {
        if (isValid(board, row, col, String(i))) {
            await placeNumber(board, row, col, String(i))
            if (await solve(board, row, col + 1)) return true
            await placeNumber(board, row, col, "")
        }
    }
    return false
}

const isValid = (board, row, col, char) => {
    // check if exists in row
    for (let i = 0; i < 9; i++) if (board[row][i] === char) return false
    // check if exists in column
    for (let i = 0; i < 9; i++) if (board[i][col] === char) return false
    // check if exists in sub-grid
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[row - (row % 3) + i][col - (col % 3) + j] === char)
                return false
        }
    }
    // is valid
    return true
}
```
