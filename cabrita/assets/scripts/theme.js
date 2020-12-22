var themePref, theme;

document.addEventListener("DOMContentLoaded",function () {
    document.getElementById ("theme").addEventListener ("click", theme, false);
    checkTheme();
})

document.addEventListener("DOMContentLoaded",function () {
    document.getElementById ("twitch-image").addEventListener ("click", redirect, false);
})

document.addEventListener("DOMContentLoaded",function () {
    document.getElementById ("cabra").addEventListener ("click", cabra, false);
})

function theme() {
    console.log(themePref);
    themePref = localStorage.getItem("themePref");
	console.log("Despues: " + themePref);
    if (themePref == "dark") {
        changeTheme("light");        
        localStorage.setItem("themePref", "light");
    } else {
        changeTheme("dark");        
        localStorage.setItem("themePref", "dark");
    }
}

function checkTheme() {
    themePref = localStorage.getItem("themePref");
	console.log("hacemos el check: " + themePref);
    if (themePref == undefined) {
        console.log(themePref);
        localStorage.setItem("themePref", "dark");
    } else {
        if (themePref == "dark") {
            changeTheme("dark");
        } else {
            changeTheme("light");
        }
    }
}

function changeTheme(theme) {
    if (theme == "light") {
        document.body.style.backgroundColor = "white";
        document.getElementById("content").style.backgroundColor = "white";
        $(".header").css("background-color", "#B786FF");
        $(".theme").css("background-color", "white");
        $(".theme").css("color", "#0e0e10");
        $(".cabra").css("background-color", "white");
        $(".cabra").css("color", "#0e0e10");
        $(".subscribe").css("background-color", "white");
        $(".subscribe").css("color", "#0e0e10");
        $(".follow").css("background-color", "white");
        $(".follow").css("color", "#0e0e10");
        $(".timer-btn").css("background-color", "white");
        $(".timer-btn").css("color", "#0e0e10");
        $(".acerca-container-content").css("background-color", "#BBBBBB");
        $(".info-container").css("color", "#0e0e10");
        document.getElementById("chat-iframe").src = "https://www.twitch.tv/embed/cabramaravilla/chat?parent=cabramaravilla.com";
        localStorage.setItem("themePref", "light");
    } else {
        document.body.style.backgroundColor = "#0e0e10";
        document.getElementById("content").style.backgroundColor = "#0e0e10";
        $(".header").css("background-color", "#9147FF");
        $(".theme").css("background-color", "#303030");
        $(".theme").css("color", "white");
        $(".cabra").css("background-color", "#303030");
        $(".cabra").css("color", "white");
        $(".subscribe").css("background-color", "#303030");
        $(".subscribe").css("color", "white");
        $(".follow").css("background-color", "#303030");
        $(".follow").css("color", "white");
        $(".timer-btn").css("background-color", "#303030");
        $(".timer-btn").css("color", "white");
        $(".acerca-container-content").css("background-color", "#303030");
        $(".info-container").css("color", "white");
        document.getElementById("chat-iframe").src = "https://www.twitch.tv/embed/cabramaravilla/chat?darkpopout&parent=cabramaravilla.com";
        localStorage.setItem("themePref", "light");
    }
}

function redirect() {
    window.open("https://twitch.tv/cabramaravilla", "_blank");
}

function cabra() {
    var checked = document.getElementById("cabra").checked;
    if (checked) {
        console.log("checkado");
        document.getElementById("video-secondary-iframe").style.zIndex = 1;
        document.getElementById("video-secondary-iframe").style.position = "absolute";
        document.getElementById("video-secondary-iframe").style.marginLeft = 0;
        document.getElementById("video-secondary-iframe").style.width = "50%";
        document.getElementById("video-secondary-iframe").style.height = "15%";

    } else {
        console.log("no checkado");
        document.getElementById("video-secondary-iframe").style.zIndex = -1;
    }

}