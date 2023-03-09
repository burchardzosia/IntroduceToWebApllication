function myFunction() {
    let person = prompt("Prosze wprowadz swoje imie");
    if (person != null) {
      document.getElementById("komunikat").innerHTML =
      "Witaj " + person;
    }
  }