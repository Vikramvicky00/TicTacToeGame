const b=document.querySelectorAll(".box")
const stat=document.querySelector("#stat")
const reset=document.querySelector("#restart")
let currentplayer="X"
let opts=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
let running=false;
let inputs=["","","","","","","","",""]
init()
function init(){
    b.forEach(button=> button.addEventListener('click',cellclick))
    running=true;
    stat.textContent=`${currentplayer} 's turn`
    reset.addEventListener("click",restart)
}

function cellclick(){
    let index=this.getAttribute("value")
    if( inputs[index]!="" || !running){
        return;
    }
    update(this,index)
    checkwin()
}
function update(cell,index){
     if(currentplayer=="X"){
        cell.style.color="red";
     }
     else{
        cell.style.color="blue";
     }
      inputs[index]=currentplayer;
      cell.textContent=currentplayer;  
}
function changeplayer(){
    currentplayer=(currentplayer=="X")? "O" : "X";
    if(currentplayer=="X"){
        stat.style.color="red";
     }
     else{
        stat.style.color="blue";
     }
    stat.textContent=`${currentplayer} 's turn`
}

function  checkwin(){
    let roundwon=false;
    for(let i=0;i<opts.length;i++){
        const ch=opts[i]
        const a=inputs[ch[0]]
       const b=inputs[ch[1]]
       const c=inputs[ch[2]]
    if(a=="" || b=="" || c==""){
       continue;
    }
    if(a==b && b==c){
        roundwon=true;
        break;
    }
  } 
    if(roundwon){
        stat.textContent=`${currentplayer} wins`
        running=false;

    }
    else if(!inputs.includes("")){
        stat.textContent=`Draw`
        roundwon=false;
    }
    else{
        changeplayer()
    }
}

function restart(){
    currentplayer="X"
    running=true;
    inputs=["","","","","","","","",""]
    b.forEach(button=> button.textContent="")
    stat.style.color="red";
    stat.textContent=`${currentplayer} 's turn`
}

