function game(){//function that keeps score or returns it
    let score=[0,0]
    function win(player){
        score[player]++
    }
    function getScore(){
        return score
    }
    return{getScore,win}
}
function player(id){
    const getID=()=>id
    return {getID}
}
function gameBoard(){
    let board=[
        [0,1,0],
        [0,2,0],
        [0,0,0]
    ]
    const getSpace=(i,j)=>board[i][j]
    const writeSpace=(id,i,j)=>board[i][j]=id
    return {getSpace,writeSpace}
}
const p1=player(0)
const p2=player(1)
const g1=game()
const gb1=gameBoard()

