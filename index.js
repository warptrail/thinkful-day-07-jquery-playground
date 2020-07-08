/* eslint-disable no-undef */
'use strict';

// Declare some data



// Count the clicks
function handleClicks() {
  let clickCount = 0;
  $('.js-click-counter').text(clickCount);

  $('.js-clicker').click(function(event) {
    clickCount += 1;
    $('.js-click-counter').text(clickCount);
    colorize();
  });
}
$(handleClicks);



// Jquery basics
let papaBear = document.querySelector('.parent');
console.log(papaBear); // Returns the entire div element

let babyBears = document.getElementsByClassName('.child');

console.log(babyBears);

let babyBirds = $('child');
console.log(babyBirds);

// Some Functionality

// Declare the possible colors
let colors = ['#9B65E8', '#1F2A72', '#1F7221', '#223285', '#C279E1',
  '#83C040', '#CA00FF', '#00FFC0', '#EC8CD8', '#D4EC8C', '#A0D882',
  '#58DF0F', '#DF0FD7', '#F59477'];

// Set up random number generator
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

// store the five baby bear color divs in an HTMLCollection
let babyBearColors = document.getElementsByClassName('random-color');

// Apply random colors to each div
function colorize () {
  for (let i = 0; i < babyBearColors.length; i++) {
    babyBearColors[i].style.background = colors[getRandomInt(colors.length)];
  }
}

colorize();

