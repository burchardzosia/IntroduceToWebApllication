const counter = document.querySelector(".counter");
const x = document.querySelector(".x");
const y = document.querySelector(".y");
let count = 0;

x.addEventListener("click", function(){
    count++;
    counter.textContent = count;
})

y.addEventListener("click", function(){
    if(x.disabled){
        x.disabled=false;
    }
    else{
        x.disabled=true;
    }
    count = 0;
    counter.textContent = count;
})