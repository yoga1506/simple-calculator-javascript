const screenDisplay  =document.querySelector("#screen")
const equal =document.querySelector("#equal")
const clear =document.querySelector("#clear")

const buttons =document.querySelectorAll("button")
let calculation=[];
let accumulativeCal;


const calculate =function(button){
    const value = button.textContent;
    // console.log(value);
    if (value ==="clear"){
        calculation=[];
        screenDisplay.textContent="."
    }else if(value ==="="){
        screenDisplay.textContent=eval(accumulativeCal);
    }else{
        calculation.push(value);
        accumulativeCal=calculation.join("");
        screenDisplay.textContent=accumulativeCal
    }
}

buttons.forEach(button => button.addEventListener("click",()=> calculate(button)))
































// console.log(buttons);

// let calculation =[];
// let accumulative;

// function calculate(button){
//  const value =button.textContent;

// if (value === "clear"){
//     calculation = [];
//     screenDisplay.textContent="0"
// }else if(value === "="){
//  screenDisplay.textContent=eval(accumulative);
// }else{
//     calculation.push(value);
//     accumulative=calculation.join("");
//     screenDisplay.textContent=accumulative;
// }

// }

// buttons.forEach(button => button.addEventListener("click",()=>calculate(button)))