console.log("Welcome to Tic Tac Toe");
let music = new Audio("music.mp3");
let audioTurn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let isgame = false;

let turn = "X"

// function to change the turn
const changeTurn = ()=>{

    return turn === "X"? "0" : "X";

}

// funciotn to check win
const checkwin = ()=>{
    let boxtext = document.getElementsByClassName("boxtext");
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    wins.forEach(e =>{
        if(boxtext[e[0]].innerText !== " " && boxtext[e[1]].innerText !== " " && boxtext[e[0]].innerText !== " "){
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]])){
                // document.querySelector('.info').innerText = boxtext[e[0]].innerText + "Won";
                document.getElementsByClassName("info")[0].innerText = boxtext[e[0]] + "Won";
                isgame = true;
        }
    }
    });
}


// Game - Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtexts = element.querySelector('.boxtext')
    element.addEventListener('click' , () =>{
        if(boxtexts.innerText === ''){
            boxtexts.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkwin();
            if(!isgame)
            {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
            
        }
    })
})