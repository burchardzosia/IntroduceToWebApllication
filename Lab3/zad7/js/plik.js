window.addEventListener('DOMContentLoaded', () => render());


function pattern(element1, element2) {

    if (element1[1] < element2[1])
       return -1
    if (element2[1] > element2[1])
       return 1
    return 0
 }


const render = async()=>{
    let ur = 'http://localhost:3000/cities';
    const res = await fetch(ur);
    const cities = await res.json();
    const div1 = document.querySelector(".div1");
    const div2 = document.querySelector(".div2");
    const div3 = document.querySelector(".div3");
    const div4 = document.querySelector(".div4");
    const div5 = document.querySelector(".div5");
    const div6 = document.querySelector(".div6");
    const div7 = document.querySelector(".div7");
    var tablica = [];
  
    let function1='<h1>Województwa małopolskie:</h1>'
    cities.forEach(cities=>{
        if (cities.province=="małopolskie"){
            function1 = function1 + `<div>${cities.name}<div/>`
        }
    })
    div1.innerHTML = function1;

    let function2='<h2>Miasta posiadające dwa znaki a:</h2>'
    cities.forEach(cities=>{
        var number=0;
        for (var i = 0; i < cities.name.length; i++) {
            letter = cities.name[i]
            if (letter == 'A' || letter == 'a')
                number++;  
        }
        if (number>=2){
            function2 = function2 + `<div>${cities.name}<div/>`
        }  
    })
    div2.innerHTML = function2;


    let function3='<h2>5 miasto pod względem  gęstości zaludnienia:</h2>'
    cities.forEach(cities=>{
        tablica.push([cities.name,cities.dentensity]);
        tablica.sort(pattern);
    })
    function3 = function3 + `<div>${tablica[tablica.length - 5][0]}</div>`
    div3.innerHTML = function3;
    

    let function4='<h2>Miasta powyżej 10000 mieszkańców</h2>'
    cities.forEach(cities=>{
        if (cities.people>100000){
          
            function4 = function4 + `<p>${cities.name}City</p>`

        }
    })
    div4.innerHTML = function4;

    let function5='<h2>Większa ilość osób w miastach poniżej lub powyżej 8000 </h2>'
    var one=0;
    var two=0;
    cities.forEach(cities=>{
        if (cities.people>80000){
          
           one++;

        }
        else{
            two++;

        }
    })
    if(one>two){
        function5 = function5 + `<p>Miast powyżej 8000 jest więcej i jest ich ${one}</p>`

    }
    else{
        function5 = function5 + `<p> Miast poniżej 8000 jest więcej i jest ich ${two}</p>`
    }
    div5.innerHTML = function5;
   

    let function6='<h2>średnia powierzchnia z miast zaczynających sie na litere p:</h2>'
    var suma=0;
    var ilosc=0;

    cities.forEach(cities=>{
    
        first=cities.name[0]
        if(first=="P"){
            suma=suma+cities.area;
            ilosc++;
        }

         
    })
    var wynik = Math.round(suma * 10000/ilosc) / 10000;
    function6=function6 +`<p>${wynik}</p>`
    div6.innerHTML = function6;





    let function7='<h2>Czy wszystkie miasta  z województwa pomorskiego są większe niz 5000 osób:</h2>'
    var  liczba1=0;
    var liczba2=0;

    cities.forEach(cities=>{
    
        if(cities.province=="pomorskie"){
            if(cities.people>50000){
                liczba1++;
            }
            else{
                liczba2++;
            }
        }
    })
    function7=function7+'<p>Wszystkie miasta w województwie pomorskim są większe niż 5000 osób</p>'
     
    
  
    div7.innerHTML = function7;
    

}