const p1=document.querySelector("#dice-1");
const p2=document.querySelector("#dice-2");
const p3=document.querySelector("#dice-3");
const rollBtn=document.querySelector(".btn");
rollBtn.onclick=()=>{
 p1.innerText= Math.floor(Math.random()*6)+1;
 p2.innerText= Math.floor(Math.random()*6)+1;
 p3.innerText= Math.floor(Math.random()*6)+1;}