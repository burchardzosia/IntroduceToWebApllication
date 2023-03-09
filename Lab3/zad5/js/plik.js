const counter = document.querySelector(".counter");
let count = 0;
let blok1 = document.querySelector("#one");
let blok2 = document.querySelector("#two");
let blok3 = document.querySelector("#three");
const text = document.querySelector(".text");
let flag2 = true;
let flag3 = true;
let cleanflag=true;
const reset = document.querySelector(".reset");
let counterCheck=0;
checkFlag=true;
reset.addEventListener("click", function(){
    count = 0;
    cleanflag = false;
    counter.textContent = 0;
    text.innerHTML = "";
    blok1.style.backgroundColor = "rgb(71, 58, 196)";
    blok2.style.backgroundColor = " rgb(221, 39, 39)";
    blok3.style.backgroundColor = "rgb(223, 226, 43)"

})
number1=document.getElementById("number1");
number3=document.getElementById("number3");
const change = document.querySelector(".change");
change.addEventListener("click", function(){
    if(counterCheck%2==0){
    
        blok1.style.backgroundColor = "rgb(223, 226, 43)";
        blok2.style.backgroundColor = " rgb(221, 39, 39)";
        blok3.style.backgroundColor = "rgb(71, 58, 196)";
        number1.innerText="3";
        number3.innerText="1";
        checkFlag=false
    }
    else{
        blok1.style.backgroundColor = "rgb(71, 58, 196)";
        blok2.style.backgroundColor = " rgb(221, 39, 39)";
        blok3.style.backgroundColor = "rgb(223, 226, 43)"
        checkFlag=true

    }
    counterCheck++;
})

blok1.addEventListener("click", function(e) {
        if(!cleanflag){
            text.innerHTML = "";
            cleanflag = true;
        }
        if (document.getElementById("check").checked) { 
            text.innerHTML = "";
            cleanflag = false;
        }
        if (checkFlag==true){
            text.appendChild(document.createTextNode("wcisnieto niebieski o wartosci 1"));
            count=count+1;
        }
        else{
            text.appendChild(document.createTextNode("wcisnieto żółty wartosci 5"));
            count=count+5;
        }
        text.appendChild(document.createElement("br"));
            counter.textContent = count;
            if (count>30){
                blok2.style.backgroundColor = "rgba(230, 230, 230, 1)";
                flag2=false;
            }
            if (count>50){
                blok3.style.backgroundColor = "rgba(230, 230, 230, 1)";
                flag3=false;
            }
            cleanflag = false;
 
})

blok2.addEventListener("click", function(e) {
        if(!cleanflag){
            text.innerHTML = "";
            cleanflag = true;
        }
        if (document.getElementById("check").checked) {
            text.innerHTML = "";
            cleanflag = false;  
        }

        if (flag2==true){

            text.appendChild(document.createTextNode("wcisnieto czerwony o wartosci 2"));
            text.appendChild(document.createElement("br"));
            count=count+2;
            counter.textContent = count;
        
            if (count>30){
                blok2.style.backgroundColor = "rgba(230, 230, 230, 1)";
                flag2=false;
            }
            if (count>50){
                blok3.style.backgroundColor = "rgba(230, 230, 230, 1)";
                flag3=false;
            }
            if (document.getElementById("check").checked) { 
                e.stopPropagation();
                cleanflag=true;  
            }
            
            
        }
})

blok3.addEventListener("click", function(e){
    if(!cleanflag){
        text.innerHTML = "";
        cleanflag = true;
    }
    if (document.getElementById("check").checked) { 
        text.innerHTML = "";
        cleanflag = false; 
    }
    if (flag3==true){
        if (checkFlag==true){
            text.appendChild(document.createTextNode("wcisnieto żółty wartosci 5"));
            count=count+5;
            
        }
        else{
            text.appendChild(document.createTextNode("wcisnieto niebieski wartosci 1"));
            count=count+1;
        }
        text.appendChild(document.createElement("br"));
        counter.textContent = count;
        if (count>30){
            blok2.style.backgroundColor = "rgba(230, 230, 230, 1)";
            flag2=false;
        }
        if (count>50){
            blok3.style.backgroundColor = "rgba(230, 230, 230, 1)";
            flag3=false;
        }
        if (document.getElementById("check").checked) { 
            e.stopPropagation();
            cleanflag=true;
             
        }
        }

})

