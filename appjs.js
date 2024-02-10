let boxes  = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newButton = document.querySelector("#ngame");
let msgContainer = document.querySelector(".msg");
let wmsg = document.querySelector("#wmsg");
let audioTurn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");

let count = 0;

let turnO = true;   // player O

const wins = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6] 
];

boxes.forEach((box) =>{
        
        box.addEventListener("click", ()=>{

            // console.log("box was Clicked");
            // box.innerText = "abc"
            if(turnO){
                box.innerText = "O";
                audioTurn.play();
                turnO = false;
                count++;
                console.log(count);
            }
            else{
                box.innerText = "X";
                audioTurn.play();
                turnO = true;
                count++;
                console.log(count);
            }
            box.disabled = true;

            checkwin();
            

        });
});


const drwa = () =>{
    wmsg.innerText = `Draw Game Start Again`;
    msgContainer.classList.remove("hide"); 
    gameover.play();
}



const resetGame = () =>{
    turnO = true;
    enablebox();
    msgContainer.classList.add("hide");
    gameover.play();
}



const disablebox = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}


const enablebox = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}



const showWinner = (winner) =>{
    
    wmsg.innerText = `Congratulations, winner is  ${winner} `;
    msgContainer.classList.remove("hide"); 
    gameover.play();
    disablebox();
}




const checkwin = () =>{

    for(win of wins){
         let pos1val = boxes[win[0]].innerText;
         let pos2val = boxes[win[1]].innerText;
         let pos3val = boxes[win[2]].innerText;

         if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                console.log(pos1val, " is winner");
                showWinner(pos1val);
            }
         }

    }

    if(count == '9'){
        drwa();
    }
};

newButton.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);