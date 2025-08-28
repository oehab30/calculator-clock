
const hour = document.querySelector('.hour');
const minute = document.querySelector('.minutes');
const second = document.querySelector('.second');
const day = document.getElementById('day');

var monthname = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december"
];

const clock = setInterval ( function time()  {
let today  = new Date()
let d = today.getDate();
let m = today.getMonth();
let y = today.getFullYear();
let h = today.getHours();
let min  = today.getMinutes();
let sec = today.getSeconds();

day.innerHTML = `${d} ${monthname[m]}  ${y}`
hour.textContent = h
minute.innerText = min
second.innerText = sec

} )