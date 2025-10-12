/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const numToCnv = document.getElementById("number-to-convert-inp");
const cnvBtn = document.getElementById("convert-btn");


const lenEl = document.getElementById("length-p");
const volEl = document.getElementById("volume-p");
const masEl = document.getElementById("mass-p");

cnvBtn.addEventListener("click", function() {
    const val = Number(numToCnv.value);
    const arr = conversions(Number(val));
    // Build strings
    lenStr = `${val} meters = ${arr[0]} feet | ${val} feet = ${arr[3]} meters`;
    volStr = `${val} liters = ${arr[1]} gallons | ${val} gallons = ${arr[4]} liters`;
    masStr = `${val} kilos = ${arr[2]} pounds | ${val} pounds = ${arr[5]} kilos`;
    // Render DOM with strings
    lenEl.innerText = lenStr;
    volEl.innerText = volStr;
    masEl.innerText = masStr;
});

function conversions(val) {
    arr = []
    arr.push( (val*3.281).toFixed(3) ) // m to ft
    arr.push( (val*0.264).toFixed(3) ) // l to gal
    arr.push( (val*2.204).toFixed(3) ) // kg to lb
    arr.push( (val*(1/3.281)).toFixed(3) ) // ft to m
    arr.push( (val*(1/0.264)).toFixed(3) ) // gal to l
    arr.push( (val*(1/2.204)).toFixed(3) ) // lb to kg
    return arr
}