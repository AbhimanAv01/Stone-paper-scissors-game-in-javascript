
let mypoints = 0;
let compoints = 0;

const m=document.querySelector("#my-point");
const b=document.querySelector("#com-point");

const msg =document.querySelector("#msg1");
const s = document.querySelectorAll(".choice");
s.forEach((choice) => {
    choice.addEventListener("click", () => {
        const Userchioce = choice.getAttribute("id");
        game(Userchioce);
    });
});


const botc=()=>{
    const o1=["Rock","paper","scissors"]
    const bot_selected=Math.floor(Math.random()*3);
    
    if(bot_selected===0)
    {
        
        let i=document.querySelector("#sb");
        i.setAttribute("src","Stone.png")
      
    }

    if(bot_selected===1)
    {
       
        let i=document.querySelector("#sb");
        i.setAttribute("src","paper.png")
      
    }

    if(bot_selected===2)
    {
        
        let i=document.querySelector("#sb");
        i.setAttribute("src","scissors.png")
      
    }


    return o1[bot_selected];
}


const game=(Userchioce)=>{
    let mychoice=Userchioce;
    console.log(mychoice);
    let botchoice=botc();
    console.log(botchoice);

    
    if(mychoice===botchoice)
    {
        console.log("DRAW");
        msg.innerHTML="DRAW 😒";
    }
    else{
        let userwin=true; 
        if(mychoice==="Rock")
    {
        userwin=botchoice==="paper"? false:true;
    }
    else  if(mychoice==="paper")
    {
        userwin=botchoice==="scissors"? false:true;
    }
    else
        {
            userwin=botchoice=="scissors"? false:true;
        } 

        
        
        if (userwin) {
            console.log("You Win");
            msg.innerHTML = "You Win!😎";
            msg.style.backgroundColor="Green";
            mypoints++;
            m.innerHTML = mypoints;
            
        const start = () => {
            setTimeout(function() {
                confetti.start()
            }, 1000);
        };


        const stop = () => {
            setTimeout(function() {
                confetti.stop()
            }, 5000);


           
        };

        start();
        stop();
            
            
        }
     else
     {
        console.log("you lose");
        msg.innerHTML="You Lose😮";
        msg.style.backgroundColor="red";
        compoints++;
        b.innerHTML=compoints;
     }
     
    //  if (mypoints==3 || compoints==3 )
    //  {
    //     alert("win")
    //  } 
     
    
}

}
