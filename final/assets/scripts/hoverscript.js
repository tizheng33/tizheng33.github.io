function showTacos(){
    var tacos = document.getElementById ("paco");
    tacos.classList.toggle("hidden");
}

document.getElementById("taco").onmouseover = showTacos;

function showCafe(){
    var cafe = document.getElementById ("c");
    cafe.classList.toggle("hidden");
}

document.getElementById("caf").onmouseover = showCafe;

function showChipotle(){
    var shat = document.getElementById ("shap");
    shat.classList.toggle("hidden");
}

document.getElementById("shat").onmouseover = showChipotle;

function showKoja(){
    var koj = document.getElementById ("poja");
    koj.classList.toggle("hidden");
}

document.getElementById("koja").onmouseover = showKoja;
