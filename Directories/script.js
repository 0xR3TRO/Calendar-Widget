// Scripts and functions on this page are the creation of 0xR3TR0. All rights reserved.  
const date = document.getElementById("date");
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");

const today = new Date(); // Poprawiona nazwa konstruktora

const weekDays = ["Sunday","Monday","Tuesday","Wednsday","Thursday","Friday","Saturday"];
const allMonths = ["January", "February","March","April","May","June","July","August","September","October","November","December"];

date.textContent = (today.getDate()<10?"0":"") + today.getDate().toString();
day.textContent = weekDays[today.getDay()];
month.textContent = allMonths[today.getMonth().toString()]; // Dodaj 1, ponieważ styczeń to 0, luty to 1, itd.
year.textContent = today.getFullYear().toString();