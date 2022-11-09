
// selecciono los botones con queryselectors, algunos por clase otros por id
let Start = document.querySelector(".randomGen");
let userStash = document.querySelector("#personalPool");
let universalPool = document.querySelector("#universalPool");

//filas
const fila1 = document.querySelector("#fila1");
const fila2 = document.querySelector("#fila2");
const fila3 = document.querySelector("#fila3");
const fila4 = document.querySelector("#fila4");
const fila5 = document.querySelector("#fila5");

//botones
 let r1_1 = document.querySelector("#r1_1");
let r1_2 = document.querySelector("#r1_2");
let r1_3 = document.querySelector("#r1_3");

let r2_1 = document.querySelector("#r2_1");
let r2_2 = document.querySelector("#r2_2");
let r2_3 = document.querySelector("#r2_3");

let r3_1 = document.querySelector("#r3_1");
let r3_2 = document.querySelector("#r3_2");
let r3_3 = document.querySelector("#r3_3");

let r4_1 = document.querySelector("#r4_1");
let r4_2 = document.querySelector("#r4_2");
let r4_3 = document.querySelector("#r4_3");

let r5_1 = document.querySelector("#r5_1");
let r5_2 = document.querySelector("#r5_2");
let r5_3 = document.querySelector("#r5_3");



let WinnerRound1 = 0;
let WinnerRound2 = 0;
let WinnerRound3 = 0;
let WinnerRound4 = 0;
let WinnerRound5 = 0;

const UniversalPoolObj = {
     $: 999,
     userWon: true,     //if user won value can be change
     isVerified: true,
}

const userStashObj = {
     $: 2,
     user: 'Roberto',
     isVerified: true,
}