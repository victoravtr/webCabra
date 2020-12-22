var teatro_estado = false;

document.addEventListener("DOMContentLoaded",function () {
    document.getElementById ("modo-teatro").addEventListener ("click", teatro, false);
})


function teatro() {
    if (teatro_estado) {
        // quitamos modo teatro
        desactivarTeatro();
    } else {
        // ponemos modo teatro
        activarTeatro();
    }
}


function activarTeatro() {
    document.getElementById("info-container").style.display = "none";
    document.getElementById("header").style.display = "none";
    document.getElementById("main-container").style.height = "100%";
}

function desactivarTeatro() {
    document.getElementById("modo-teatro").style.display = "content";
    document.getElementById("header").style.display = "flex";
    document.getElementById("main-container").style.height = "calc(100% - 46px)";
}