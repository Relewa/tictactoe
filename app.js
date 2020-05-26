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


const render = (() =>{
    let boardArr = gameBoard.board();
    const htmlBoard = document.getElementById('board');
    let myArray = Array.from(htmlBoard.getElementsByClassName('cell'));

    for (let i = 0; i< myArray.length; i++){
        myArray[i].innerText = boardArr[i];
    }

    document.addEventListener('click',(e)=>{
        console.log(e.target.id);
        if (e.target.innerText===""){
            e.target.innerText ="X";
            boardArr[e.target.id] = "X";
            let randNum = Math.floor(Math.random() * 9);
            boardArr[randNum] = "O";
            myArray[randNum].innerText = "O";
    }
        console.log(boardArr);
    });
})();



const playerOne = Player('Raghid','X');
const computer = Player('Computer','O');
