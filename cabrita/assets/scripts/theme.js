/* eslint-disable func-names */
/* eslint-disable no-useless-escape */
let themePref = localStorage.getItem('themePref');

function changeTheme(theme) {
  if (theme === 'light') {
    document.body.style.backgroundColor = 'white';
    document.getElementById('content').style.backgroundColor = 'white';
    $('.header').css('background-color', '#B786FF');
    $('.theme').css('background-color', 'white');
    $('.theme').css('color', '#0e0e10');
    $('.cabra').css('background-color', 'white');
    $('.cabra').css('color', '#0e0e10');
    $('.subscribe').css('background-color', 'white');
    $('.subscribe').css('color', '#0e0e10');
    $('.follow').css('background-color', 'white');
    $('.follow').css('color', '#0e0e10');
    $('.timer-btn').css('background-color', 'white');
    $('.timer-btn').css('color', '#0e0e10');
    $('.acerca-container-content').css('background-color', '#BBBBBB');
    $('.info-container').css('color', '#0e0e10');
    document.getElementById('chat-iframe').src = 'https://www.twitch.tv/embed/cabramaravilla/chat?parent=cabramaravilla.com';
    localStorage.setItem('themePref', 'light');
  } else {
    document.body.style.backgroundColor = '#0e0e10';
    document.getElementById('content').style.backgroundColor = '#0e0e10';
    $('.header').css('background-color', '#9147FF');
    $('.theme').css('background-color', '#303030');
    $('.theme').css('color', 'white');
    $('.cabra').css('background-color', '#303030');
    $('.cabra').css('color', 'white');
    $('.subscribe').css('background-color', '#303030');
    $('.subscribe').css('color', 'white');
    $('.follow').css('background-color', '#303030');
    $('.follow').css('color', 'white');
    $('.timer-btn').css('background-color', '#303030');
    $('.timer-btn').css('color', 'white');
    $('.acerca-container-content').css('background-color', '#303030');
    $('.info-container').css('color', 'white');
    document.getElementById('chat-iframe').src = 'https://www.twitch.tv/embed/cabramaravilla/chat?darkpopout&parent=cabramaravilla.com';
    localStorage.setItem('themePref', 'light');
  }
}

function checkTheme() {
  themePref = localStorage.getItem('themePref');
  if (themePref === undefined) {
    localStorage.setItem('themePref', 'dark');
  } else if (themePref === 'dark') {
    changeTheme('dark');
  } else {
    changeTheme('light');
  }
}

function themeSwitch() {
  themePref = localStorage.getItem('themePref');
  if (themePref === 'dark') {
    changeTheme('light');
    localStorage.setItem('themePref', 'light');
  } else {
    changeTheme('dark');
    localStorage.setItem('themePref', 'dark');
  }
}

function redirect() {
  window.open('https://twitch.tv/cabramaravilla', '_blank');
}

function cabra() {
  const { checked } = document.getElementById('cabra');
  if (checked) {
    document.getElementById('video-secondary-iframe').style.zIndex = 1;
    document.getElementById('video-secondary-iframe').style.position = 'absolute';
    document.getElementById('video-secondary-iframe').style.marginLeft = 0;
    document.getElementById('video-secondary-iframe').style.width = '50%';
    document.getElementById('video-secondary-iframe').style.height = '15%';
  } else {
    document.getElementById('video-secondary-iframe').style.zIndex = -1;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('theme').addEventListener('click', themeSwitch, false);
  checkTheme();
});

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('twitch-image').addEventListener('click', redirect, false);
});

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('cabra').addEventListener('click', cabra, false);
});
