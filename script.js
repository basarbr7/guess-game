let box01 = document.querySelector(".box01");
let input01 = document.querySelector(".box01 input");
let error01 = document.querySelector(".box01 span");
let button01 = document.querySelector(".box01 button");

let box02 = document.querySelector(".box02");
let heading02 = document.querySelector(".box02 h2")
let input02 = document.querySelector(".box02 input");
let error02 = document.querySelector(".box02 span");
let button02 = document.querySelector(".box02 button");

let box03 = document.querySelector(".box03");
let input03 = document.querySelector(".box03 input");
let error03 = document.querySelector(".box03 span");
let button03 = document.querySelector(".box03 button");

let box04 = document.querySelector(".box04");
let heading04 = document.querySelector(".box04 h2")
let input04 = document.querySelector(".box04 input");
let error04 = document.querySelector(".box04 span");
let button04 = document.querySelector(".box04 button");
let chance = document.querySelector(".box04 p")

let box05 = document.querySelector(".box05");
let heading05 = document.querySelector(".box05 h2");
let p05 = document.querySelector(".box05 p");

let chanceCount = 5;


button01.addEventListener("click", function(){
    if(input01.value.trim() == ""){
        error01.classList.add("spanShow");
    }
    else{
        box01.style.display = "none";
        box02.style.display = "flex";
        heading02.innerHTML = `Player 01: ${input01.value}`;
        heading02.style.textTransform = "capitalize";
    }
})

button02.addEventListener("click", function(){
    if(input02.value.trim() == ""){
        error02.classList.add("spanShow");
    }
    else{
        if(input02.value>=0 && input02.value<=9){
            box02.style.display = "none";
            box03.style.display = "flex";
        }
        else{
            error02.classList.add("spanShow");
        }
    }
})

button03.addEventListener("click", function(){
    if(input03.value.trim() == ""){
        error03.classList.add("spanShow");
    }
    else{
        box03.style.display = "none";
        box04.style.display = "flex";
        heading04.innerHTML = `Player 02: ${input03.value}`;
        heading04.style.textTransform = "capitalize";
    }
})


button04.addEventListener("click", function(){
    error04.classList.remove("spanShow");

    if(input04.value.trim() == ""){
        error04.classList.add("spanShow");
    }
    else{
        if (input02.value == input04.value){
            box04.style.display = "none";
            box05.style.display = "flex";
            heading05.innerHTML = `${input03.value}<br> won the match..!`
            heading05.style.textTransform ="uppercase"
        }
        else if(input04.value>=0 && input04.value<=9){
            error04.classList.remove("spanShow");
            chanceCount --;
            chance.innerHTML = `Chance left: ${chanceCount}`;
            if(chanceCount == 0){
                box04.style.display = "none";
                box05.style.display = "flex";
                heading05.innerHTML = `${input01.value} <br> won the match & number was ${input02.value}`
                heading05.style.textTransform ="uppercase"
            }
        }
        else{
        error04.classList.add("spanShow");
        }
    }
})


let resetButton = document.createElement("button");
resetButton.textContent = "Play Again";
resetButton.addEventListener("click", function() {
    location.reload();
});
box05.appendChild(resetButton);


// input02.addEventListener("input", function() {
//     input02.value = input02.value.replace(/[^0-9]/g, "").slice(0, 1);
// });

// input04.addEventListener("input", function() {
//     input04.value = input04.value.replace(/[^0-9]/g, "").slice(0, 1);
// });