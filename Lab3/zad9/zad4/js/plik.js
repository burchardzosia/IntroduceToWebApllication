const nam = document.getElementById('name');
var phone = document.getElementById('phone');
let form = document.querySelector('.formik');
let parenciak = document.querySelector('.wrapper');
var letters = /^[A-Z][a-z]+\s[A-Z][a-z]+$/;
var nums = /^[+]?[0-9][\s]?[0-9][\s]?[0-9][\s]?[0-9][\s]?[0-9][\s]?[0-9][\s]?[0-9][\s]?[0-9][\s]?[0-9][\s]?[0-9][\s]?[0-9][\s]?[0-9][\s]?$/;

form.addEventListener("submit", (e) =>{
    e.preventDefault();
    if(nam.value.match(letters)){
        if(phone.value.match(nums)){
            let x = document.createElement("h3");
            x.innerText = nam.value;
            let y = document.createElement("h5");
            y.innerText = phone.value;
            let z = document.createElement("btn");
            z.classList.add("but");
            z.innerHTML = "&#128465" ;
            let a = document.createElement("div");
            a.classList.add('dane');
            a.appendChild(x);
            a.appendChild(y);
            let b = document.createElement("div");
            b.classList.add('card');
            b.appendChild(a);
            b.appendChild(z);
            z.addEventListener("click", function(){
                parenciak.removeChild(b);
            })
            parenciak.prepend(b);
        }
        else{
            alert("Błąd w numerze telefonu, \npowinien być w formacie \n777 777 777 (ważne 2 spacje pomiędzy i aby zaczynał się \nod cyfr 5-8)");
        }
    }
    else{
        alert("Błąd w imieniu i nazwisku, \npowinno być w formacie \nImie Nazwisko (ważne duże litery i spacja, \ncyfry i znaki specjalne wykluczone)");
    }
})