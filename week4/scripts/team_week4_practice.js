const getBoard = document.querySelector('.board');
const getDivBoard = document.querySelector('.divBoard');
const resetButton = document.getElementById('reset');
const player1 = 'X';
const player2 = 'O'; 
let player = player1;

function addPiece(e){
    console.log(e.target);
    e.taget.innerHTML = player;
    if(player === player1){
        player = player2;
    }
    else{
        player = player1; 
    }
}

function resetBoard(){
    console.dir(board);
    for(i = 0; i < board.rows.length; i++){
        let row = board.rows[i];
        for(j = 0; j < row.cells.length; j++){
            row.cells[j].innerHTML = '';
        }
    }
   
}


getBoard.addEventListener('click', addPiece);
resetButton.addEventListener('click',resetBoard);