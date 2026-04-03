let userscore = 0;
let compscore = 0;
let choices = document.querySelectorAll(".choice")
let para = document.querySelector("#message");
let uscore = document.querySelector("#user-score");
let cscore = document.querySelector("#comp-score");

let compgenerate = ()=>{
    let option = ["rock","paper","scissor"];
    let idxvalue = Math.floor(Math.random()*3);
    return(option [idxvalue]);


}
let playgame = (userchoice)=>{
    console.log("the selected choice is", userchoice )
    let compchoice = compgenerate();
    console.log("computer choice is", compchoice)
    if (userchoice === compchoice){
        console.log("the game is draw");
        para.innerText= `It's an Draw you both have chooosed ${userchoice} Play again.`
        para.style.backgroundColor="black";
    }
    else{
        let userwin = true;
        if(userchoice === "rock"){
            //paper, scissor
            userwin = compchoice ==="paper"? false:true;
        }
        if(userchoice==="paper"){
            //scissor, rock
            userwin= compchoice ==="scissor"? false:true;
        }
        if(userchoice==="scissor"){
            //rock,paper
            userwin = compchoice ==="rock"? false:true;
        }
        if(userwin === true){
            userscore++;
            uscore.innerHTML=userscore;
            console.log("Hurray You WOn!!!")
            para.innerText = `Hurray You WOn!!!  your ${userchoice} beats ${compchoice} `;
            para.style.backgroundColor="green";
        }
        if(userwin === false){
            compscore++;
            cscore.innerHTML=compscore;
            console.log("khelne nai ata kya ?")
            para.innerText = `You lose ${ compchoice} beats ${userchoice}`;
            para.style.backgroundColor="red";
        }
    }
    

}
choices.forEach((choice) =>{
    console.log(choice);
    choice.addEventListener("click", () =>{
        let userchoice = choice.getAttribute("id");
       playgame(userchoice);
    })
})