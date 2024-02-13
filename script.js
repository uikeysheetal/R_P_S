let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const user_Score=document.querySelector("#user-score");
const comp_Score=document.querySelector("#comp-score");


const showWinner=(userWin, userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        user_Score.innerText=userScore;
        console.log("You win!!!");
        msg.innerText=` You win the game your ${userChoice} beats the computer's${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{console.log("You Lose..");
    compScore++;
        comp_Score.innerText=compScore;
    msg.innerText=`You lose the Game computer's ${compChoice} beats  your ${userChoice}`;
    msg.style.backgroundColor="red";
}

};

const playGame=(userChoice)=>{
    console.log("user choice=", userChoice);
    const compChoice=genChoice();
    console.log("computer's choice is =",compChoice);

    if(userChoice===compChoice){
        drawGame();
       

    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=compChoice==="paper"? false:true;}
            else if(userChoice==="paper"){
                userWin=compChoice==="scissor"?false:true;
            }

            else{
                userWin=compChoice==="rock"?false:true;
            }

            showWinner(userWin,userChoice,compChoice);
        }

        
    
};

const drawGame=()=>{
    console.log("Game was draw.");
    msg.innerText="Game was Draw , Please play again";
    msg.style.backgroundColor="blue";

};

const genChoice=()=>{
    const options=["rock","paper","scissor"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
};

choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
     const userChoice=choice.getAttribute("id");
     playGame(userChoice);
    });

});