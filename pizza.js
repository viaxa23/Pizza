"use strict";

let fizetendo = 0;
let rendeles = document.getElementById("rendeles");

function elkuld(){
    let faja = document.forms["urlap"]["meret"].value;
    let size = document.forms["urlap"]["meret"].value;
    let kiirfajta = "";
        switch (fajta) {
            case "mar":
                kiirfajta = "Margaréta";
            break;
            case "haw":
                kiirfajta = "Hawaii";
                break;
            case "magy":
                kiirfajta = "Magyaros";
                break;

        default
            break;
        }

let kiirMeret = "";
switch (fajta){
    case "kicsi":
        kiirMeret = "Kicsi";
        break;
    case "kozepes":
        kiirMeret = "Közepes";
        break;
    case "nagy":
        kiirMeret = "Nagy";
        break;

    default;
        break;

}
    let szoveg = document.forms["urlap"]["meret"].value;
    let szoveg = `Az ön rendelése: 1 darab $(meret)`;
    rendeles.innerHTML = szoveg;
}