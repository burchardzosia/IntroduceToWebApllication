
const f = document.getElementById('ball');
const b= document.getElementById('b');
b.addEventListener('click', (ev) => {
  ev.stopPropagation();
  f.style.transform = `translateY(${ev.clientY - 12}px)`;
  f.style.transform += `translateX(${ev.clientX - 12}px)`;
});

document.addEventListener('click', (ev) => {
    alert("Nie wychodż poza strefę!")
  });
