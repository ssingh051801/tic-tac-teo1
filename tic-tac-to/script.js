let boxes=document.querySelectorAll(".box");
let btn=document.querySelector("#btn");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");


let trueO= true; //playerX and PlayerO

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetGame=()=>{
    turn0=true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        
        if (trueO==true){
            box.innerText="0";
            trueO=false;
        }
        else{
            box.innerText="X";
            trueO=true;

        } 
        box.disabled=true;
        checkWinner();
    });
    
});
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

const showWinner=(winner)=>{
    msg.innerText= `Congratulation, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner =() => {
    for(pattern of winPatterns){
        // console.log(pattern[0],pattern[1],pattern[2]);
      
        let pos1vol=boxes[pattern[0]].innerText;
        let pos2vol=boxes[pattern[1]].innerText;
        let pos3vol=boxes[pattern[2]].innerText;

        if (pos1vol !="" && pos2vol != "" && pos3vol!= ""){
            if (pos1vol===pos2vol && pos2vol===pos3vol){
                console.log("WINNER",pos1vol)
                showWinner(pos1vol);
            }
        }
        
    };
};

newGameBtn.addEventListener("click",resetGame);
btn.addEventListener("click",resetGame);