// function gameBoard(){
//     let score=0
//     const win = ()=>score++
//     return function returnScore(){
//         return score
//     }

// }

// const game =function(){
//     let score=[0,0]
//     function win(player){
//         this.score[player]++
//     }

// }
function game(){
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
    this.id=id
    const getID=()=>this.id
    return{getID}
}
const player1=player(0)
const player2=player(1)
const game1=game()

// function user(name){
//     const user=name
//     let score=0
//     const addScore=()=>score++
//     const getScore=()=>score
//     return{user,addScore,getScore}
// }