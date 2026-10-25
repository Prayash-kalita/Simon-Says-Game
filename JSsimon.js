let gameSeq=[];
let userSeq=[];
const colors=["red","green","purple","yellow"];


let start=false;
let i=0;
let scores=[];

let h2 = document.querySelector("h2");
let allBtns=document.querySelectorAll(".btn");


function gameFlash(btn){
   btn.classList.add("gameFlash");
   setTimeout(() => {
   btn.classList.remove("gameFlash");
   }, 350);
}

function userFlash(btn){
   btn.classList.add("userFlash");
   setTimeout(() => {
   btn.classList.remove("userFlash");
   }, 350);
}


function levelUp (){
    userSeq=[];
    i++;
    h2.innerText=`Level ${i}`;
    let randomIdx= Math.floor(Math.random() * 4);
    let randomColor= colors[randomIdx];
    let randomBtn=document.querySelector(`.${randomColor}`);
    gameSeq.push(randomColor);
    console.log(gameSeq);
    gameFlash(randomBtn);
}

function checkAns(idx){
    if (gameSeq[idx] == userSeq[idx]) {
        if (gameSeq.length == userSeq.length) {
            setTimeout(levelUp,1000);
        }
    }
    else{
        scores.push(i-1);
        let highest=Math.max(...scores);
        // console.log(highest);
        if ((i-1)>=highest) {
        h2.innerHTML=`Game over! New Record.<br>Your Highest Score is ${i-1}.<br>Press any key to start the Game.`;
        }
        else{
        h2.innerHTML=`Game over! Your score is ${i-1}.<br>The Highest Score was ${highest}.<br>Press any key to start the Game.`;
        }
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(() => {
            document.querySelector("body").style.backgroundColor="white";           
        }, 350);
        reset();
    
    }
}

document.addEventListener("keypress",function(){
    if (start == false) {
        console.log("Game is started");
        start = true;

        levelUp();
    }

})

for(btn of allBtns){
    btn.addEventListener("click", function (){
        // console.log(this);
        userFlash(this);
        let userColor=this.getAttribute("id");
        userSeq.push(userColor);
        // console.log(userSeq);
        checkAns(userSeq.length-1);
    })
}

function reset(){
    start=false;
    gameSeq=[];
    userSeq=[];
    i=0;
}









