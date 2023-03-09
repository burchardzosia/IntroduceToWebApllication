let form=document.getElementById("form");
let fname = document.getElementById("fname");
let telefon = document.getElementById("telefon");
let content = document.getElementById("content");
var addBtn = document.getElementById("dodaj");
let container=document.getElementById("content");
var letters = /^[A-Z][a-z]+\s[A-Z][a-z]+$/;
var nums = /^[+]?[0-9][\s]?[0-9][\s]?[0-9][\s]?[0-9][\s]?[0-9][\s]?[0-9][\s]?[0-9][\s]?[0-9][\s]?[0-9][\s]?[0-9][\s]?[0-9][\s]?[0-9][\s]?$/;
var nums2 = /^[0-9][\s]?[0-9][\s]?[0-9][\s]?[0-9][\s]?[0-9][\s]?[0-9][\s]?[0-9][\s]?[0-9][\s]?[0-9][\s]?$/;
addBtn.addEventListener("click", function(){
    if ( telefon.value.match(nums) || telefon.value.match(nums2))
    {
      if (fname.value.match(letters)){
        let data = document.createElement("h1");
        data.innerText=fname.value;
        let data2= document.createElement("h2");
        data2.innerText=telefon.value;
        let remove = document.createElement("btn");
        remove.classList.add("bin")
        let  datac= document.createElement("div");
        datac.classList.add('dane');
        datac.appendChild(data);
        datac.appendChild(data2);
        let data_container=document.createElement("div")
        data_container.classList.add('data_container')
        data_container.appendChild(datac);
        data_container.appendChild(remove)
        remove.addEventListener("click", function(){
            container.removeChild(data_container);
        })
        container.prepend(data_container)

      }
      else{
        alert("Proszę o wpisanie poprawnie imienia i nazwiska");
      }
        }
        else {
        alert("Proszę o wpisanie poprawnie telefonu");
        }
    

})

