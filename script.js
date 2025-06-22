// function game() {//function that keeps score or returns it
//     // let score = [0, 0]
//     // function win(player) {
//     //     score[player]++
//     // }
//     // function getScore() {
//     //     return score
//     // }
//     // return { getScore, win }
// }
// function player(id) {
//     const getID = () => id
//     return { getID }
// }
function gameBoard() {
    let board = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ]
    let score = [0, 0]
    let playerCounter = 1//to mod later to see who is the current player
    function getScore() {
        return score
    }
    const getPlayerCounter = () => playerCounter
    const getWinner = () => checkGameState(board)
    const getSpace = (i, j) => board[i][j]
    const writeSpace = (id, i, j) => {
        if(board[i][j]!=null)return
        board[i][j] = id
        let gameState = checkGameState(board)
        playerCounter++
        if (gameState == 'X') {
            score[0]++
            displayScore()
            playerCounter = 1
        }
        if (gameState == 'O') {
            score[1]++
            displayScore()
            playerCounter = 1
        }
        if (gameState == "Draw") {
            playerCounter = 1
            displayBoard()
        }


    }
    const getBoard = () => board
    return { getSpace, writeSpace, getBoard, getWinner, getScore, getPlayerCounter }
}

function checkGameState(board) {
    const winPatterns = [
        [[0, 0], [0, 1], [0, 2]],
        [[1, 0], [1, 1], [1, 2]],
        [[2, 0], [2, 1], [2, 2]],
        [[0, 0], [1, 0], [2, 0]],
        [[0, 1], [1, 1], [2, 1]],
        [[0, 2], [1, 2], [2, 2]],
        [[0, 0], [1, 1], [2, 2]],
        [[0, 2], [1, 1], [2, 0]]
    ]
    //check for win
    for (const pattern of winPatterns) {
        const [a, b, c] = pattern
        const first = board[a[0]][a[1]]
        if (first && first === board[b[0]][b[1]] && first === board[c[0]][c[1]]) {
            //clears the board after win
            displayBoard()
            alert(first + ' Wins!')
            for (let i = 0; i < board.length; i++) {
                for (let j = 0; j < board[i].length; j++) {
                    board[i][j] = null
                }
            }
            displayBoard()
            score[first]++
            return first
        }
    }
    //check for draw and clears the board if true
    const isFull = board.every(row => row.every(cell => cell))
    if (isFull) {
        alert('Draw!')
        displayBoard()
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                board[i][j] = null
            }
        }
        
        return 'Draw'
    }
    //return null if game still going
    displayBoard()
    return null
}
const gb1 = gameBoard();


function displayScore() {
    let score = document.getElementById("score")
    let scoreArray = gb1.getScore()
    score.innerHTML = scoreArray[0] + " - " + scoreArray[1]

}
function displayBoard() {
    let counter = 0
    let grid = document.getElementsByClassName('gridCell')
    const board = gb1.getBoard()
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            grid[counter].innerHTML = board[i][j]
            counter++
        }
    }
}
//function to get the position from 1-9 to [i][j]
function getGridPosition(num) {
    const row = Math.floor((num - 1) / 3)
    const col = (num - 1) % 3
    return [row,col]
}
displayBoard()
//function that takes click input and invokes writeSpace
function gridInput() {
    let grid = document.getElementsByClassName('gridCell')
    for (let i = 0; i < grid.length; i++) {
        grid[i].addEventListener('click', () => {
            let player
            let playerCounter=gb1.getPlayerCounter()
            if (playerCounter % 2 == 1) {
                player = "X"
            }
            if (playerCounter % 2 != 1) {
                player = "O"
            }
            let position = getGridPosition(grid[i].getAttribute('id'))
            gb1.writeSpace(player,position[0], position[1])
            
        })
    }
}
gridInput()