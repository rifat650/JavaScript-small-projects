const btn=document.querySelector("button");

btn.onclick=()=>{
const diceNum=document.querySelector("#dicenum").value;
const diceVal=document.querySelector(".dice-values");
const diceimg=document.querySelector(".dice-images");
let values=[];
let images=[];
for(let i=0; i<diceNum; i++){
        let diceValue=Math.floor(Math.random()*6)+1;
        values.push(diceValue);
        images.push(`<img src="Assets/${diceValue}.svg">`);
        

}
diceVal.innerText=`Dice: ${values.join(", ")}`;
diceimg.innerHTML=images;

}