function game() {//function that keeps score or returns it
    let score = [0, 0]
    function win(player) {
        score[player]++
    }
    function getScore() {
        return score
    }
    return { getScore, win }
}
function player(id) {
    const getID = () => id
    return { getID }
}
function gameBoard() {
    let board = [
        ['x', 'x', 'o'],
        ['o', 'x', 'x'],
        ['o', 'x', 'o']
    ]
    const getWinner = () => checkGameState(board)
    const getSpace = (i, j) => board[i][j]
    const writeSpace = (id, i, j) => board[i][j] = id
    const getBoard = () => board
    return { getSpace, writeSpace, getBoard, getWinner }
}

function checkGameState(board) {
    const winPatterns = [
      [ [0,0], [0,1], [0,2] ],
      [ [1,0], [1,1], [1,2] ],
      [ [2,0], [2,1], [2,2] ],
      [ [0,0], [1,0], [2,0] ],
      [ [0,1], [1,1], [2,1] ],
      [ [0,2], [1,2], [2,2] ],
      [ [0,0], [1,1], [2,2] ],
      [ [0,2], [1,1], [2,0] ]
    ]
  //check for win
    for (const pattern of winPatterns) {
      const [a, b, c] = pattern
      const first = board[a[0]][a[1]]
      if (first && first === board[b[0]][b[1]] && first === board[c[0]][c[1]]) {
        //clears the board after win
        for (let i = 0; i < board.length; i++) {
          for (let j = 0; j < board[i].length; j++) {
            board[i][j] = null
          }
        }
        return first
      }
    }
  //check for draw and clears the board if true
    const isFull = board.every(row => row.every(cell => cell))
    if (isFull) {
      for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
          board[i][j] = null
        }
      }
      return 'Draw'
    }
    //return null if game still going
    return null
  }
const p1 = player(0)
const p2 = player(1)
const g1 = game()
const gb1 = gameBoard()