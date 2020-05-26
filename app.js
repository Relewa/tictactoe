const gameBoard = (() => {
    let board = () => [
        "","","",
        "","","",
        "","",""
    ];
    return {board};
})();

const Player = (name,mark) => {
    const getName = () => name;
    const getMark = () => mark;
    return {getName,getMark};
};

function winTest(board, side) {
    let winConditions = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [6,4,2]];
    for(let i = 0; i < winConditions.length; i++) { 
      let sum = 0;
      let w = winConditions[i];
  
      for(let b = 0; b < w.length; b++) {
        if(board[w[b]].textcontent === side) {
          sum++;
        }
      }
  
      if(sum === 3) {
        return true;
      }
    }
    return false;
  }


const render = (() =>{
    let boardArr = gameBoard.board();
    const htmlBoard = document.getElementById('board');
    let myArray = Array.from(htmlBoard.getElementsByClassName('cell'));

    for (let i = 0; i< myArray.length; i++){
        myArray[i].innerText = boardArr[i];
    }

    document.addEventListener('click',(e)=>{
        let randNum = Math.floor(Math.random() * 9);
        if (e.target.innerText===""){
            e.target.innerText ="X";
            boardArr[e.target.id] = "X";
            
            for (let i = 0; i< myArray.length; i++){
                if (myArray[i].innerText !== "" && randNum === i){
                    randNum = Math.floor(Math.random() * 9);
                }
            }
            
        }

        boardArr[randNum] = "O";
        myArray[randNum].innerText = "O";
        console.log(boardArr);
        console.log(winTest(boardArr,"X"));
        console.log(winTest(boardArr,"O"));
        


    });
})();




const playerOne = Player('Raghid','X');
const computer = Player('Computer','O');
