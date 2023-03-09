var   card = document.getElementsByClassName("go");
var   right = document.getElementById("right");
var   left = document.getElementById("left");
var counter=0;
var random=document.getElementById("random")
var content = document.getElementById("review");

function change(){
    var cardLength= card[0].clientWidth;
    if (counter >= 3) {
        counter = 0;
    }
    else if (counter < 0){
        counter = 2;
    }
    content.style.transform = `translateX(-${cardLength*counter}px)`;
}
random.addEventListener('click',function(){
    var tmp=counter
    while(tmp==counter){
        tmp= Math.floor(Math.random()*3);
    }
    counter=tmp;
    change();
})

left.addEventListener('click',function() {
    counter++;
    change();
})

right.addEventListener('click',function() {
    counter--;
    change();
})




   
    

  
    
 

    

    


