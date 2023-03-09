const cursor=document.querySelector('.cursor');
window.addEventListener('mousemove',(e)=>{
    cursor.style.left=e.pageX+'px';
    cursor.style.top=e.pageY+'px';

})
document.addEventListener('DOMContentLoaded', function(){
    const nick = document.getElementById('textNick');
    const form=document.getElementById('nickForm');
    const score=document.getElementById('viewScore');
    flag=false;
    var counter=0;
    var scoreValue = document.querySelector('.span1');
    var zombieArea = document.querySelector('.zombieArea');
    var heart=3;
    form.addEventListener("submit",(e)=>{
        e.preventDefault();
        if(nick.value !== ""){
            flag = true;
            form.style.display = "none";
            score.innerText = 0;
            score.style.display = "grid";
        
        }
        var playername = document.createElement('div');
        playername.classList.add('PlayerGame');
        zombieArea.appendChild(playername);
        playername.innerText=nick.value;
    })
    zombieArea.addEventListener('click', function(e) {scoreValue
        if (e.target.classList.contains ('zombie')) {
            counter+=12;
            e.target.remove();
    }
    else{
        counter -= 6;
    }
    score.innerText = counter;  
    })
    var play = setInterval(function() {
        if (flag==true){
            if(heart>0){
                var zombie = document.createElement('div');
                zombie.classList.add('zombie');
                var bottomZombie=Math.random()*300;
                zombie.style.bottom=bottomZombie+'px';
                var sizeZombie=0.3+Math.random()*2;
                zombie.style.transform= 'scale(' + sizeZombie + ')';
                var speed=Math.random()*10;
                var speedAnim="1s,"+speed+"s";
                console.log(speedAnim);
                zombie.style.animationDuration = speedAnim;
                zombieArea.appendChild(zombie);
                zombie.addEventListener('animationend', function(e) {
                    if(e.animationName === "zombieWalk") {
                        heart--;
 
                    } 
                })
            }
            else{
                removeAllChildNodes(zombieArea);
                var result = document.createElement('div');
                result.classList.add('result');
                result.innerText=`Your result: ${counter}`;
                zombieArea.appendChild(result);
                score.style.display = "none";
                clearInterval(play);
               
            }
        }
    }, Math.random()*600+200);
})

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}