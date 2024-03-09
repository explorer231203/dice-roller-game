const inputbtn=document.getElementById("btn");
const img=document.getElementById("image");
const dis=document.getElementById("number");
let num;
const txt=document.getElementById("msg");
inputbtn.onclick=function(){
    num=Math.floor(Math.random()*6)+1;
    if(num==1){
        img.style.background='url("dice-six-faces-one.svg")';
    }
    if(num==2){
        img.style.backgroundImage='url("dice-six-faces-two.svg")'
        img.style.backgroundSize="cover"
        img.style.backgroundRepeat="no-repeat"
        txt.textContent="";
    }
    if(num==3){
        img.style.background='url("dice-six-faces-three.svg")';
        txt.textContent="";
    }
    if(num==4){
        img.style.background='url("dice-six-faces-four.svg")';
        txt.textContent="";
    }
    if(num==5){
        img.style.background='url("dice-six-faces-five.svg")';
        txt.textContent="";
    }
    if(num==6){
        img.style.background='url("dice-six-faces-six.svg")';
        txt.textContent="";
    }
    dis.textContent="You got : "+num;
}