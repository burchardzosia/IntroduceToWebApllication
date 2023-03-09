
var pw = document.getElementById("psw"); 
var pw2 = document.getElementById("psw2");
var letter = document.getElementById("letter");
var special_character= document.getElementById("special_character");
var digit = document.getElementById("digit");
var size = document.getElementById("length");
var image1 = document.getElementById("one");
var image2 = document.getElementById("two");
var image3 = document.getElementById("three");
var image4 = document.getElementById("four");
var eye1 = document.getElementById("eye");
var eye2 = document.getElementById("eye2");
pw.onkeyup = function() {  
    if (pw.value.length>=8){
        image1.style.backgroundImage = "url('check.png')";
    }
    else{
        image1.style.backgroundImage = "url('ucheck.png')";
    }



  var pattern= /[A-Z]/g;
  if(pw.value.match(pattern)) {
    image3.style.backgroundImage = "url('check.png')";
  }
  else{
    image3.style.backgroundImage = "url('ucheck.png')";
  }


  var numbers = /[0-9]/g;
  if(pw.value.match(numbers)) {
    image4.style.backgroundImage = "url('check.png')";
  } 
  else {
    image4.style.backgroundImage = "url('ucheck.png')";
  }

  var symbols = /[!@#$%^&*]/g;
  if( pw.value.match( symbols)) {
    image2.style.backgroundImage = "url('check.png')";
  } 
  else {
    image2.style.backgroundImage = "url('ucheck.png')";
  }
}
pw2.onblur = function() {
    if(pw2.value!=pw.value){
        alert("Hasła są różne!")
    }

}



function see(){
    if (pw.type === "password") {
        pw.type = "text";
        eye1.style.backgroundImage = "url('visible.png')";


      } else {
        pw.type = "password";
        eye1.style.backgroundImage = "url('invisible.png')";
      }
}

function saw(){
    if (pw2.type === "password") {
        pw2.type = "text";
        eye2.style.backgroundImage = "url('visible.png')";


      } else {
        pw2.type = "password";
        eye2.style.backgroundImage = "url('invisible.png')";
      }
}
